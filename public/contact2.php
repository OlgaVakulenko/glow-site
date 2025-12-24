<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

/**
 * Разрешаем вызов ТОЛЬКО через Cloudflare Worker
 */
if (
    empty($_SERVER['HTTP_USER_AGENT']) ||
    strpos($_SERVER['HTTP_USER_AGENT'], 'CF-Worker') === false
) {
    http_response_code(403);
    echo 'Forbidden';
    exit;
}

$res = formHandler();
echo $res;
die();

function pipeUrl($path) {
    $company_domain = 'glow-cdac99';
    $api_token = '418d3e3b3508c377a04b54e502d5868aa79f61ef';
    return 'https://' . $company_domain . '.pipedrive.com/v1/' . $path . '?api_token=' . $api_token;
}

function post($key, $default = null) {
    return isset($_POST[$key]) ? $_POST[$key] : $default;
}

function formHandler() {

    $name    = post('name');
    $project = implode(", ", post('services', []));
    $about   = post('project-about', '');
    $budget  = post('budget', '');
    $email   = post('email', '');
    $source  = post('source', 'Direct');
    $query   = post('query', '');

    // honeypot
    if (!empty(post('phonenumber'))) {
        return json_respond(['status' => 'error', 'cause' => 'honeypot']);
    }

    // create contact
    $contactResponse = request_post(pipeUrl('persons'), [
        'name'  => $name,
        'email' => $email,
    ]);

    $contact = json_decode($contactResponse, true);
    $contactId = (int)($contact['data']['id'] ?? 0);

    if (!$contactId) {
        return json_respond(['status' => 'error', 'cause' => 'contact id']);
    }

    // create lead
    $dealResponse = request_post_json(pipeUrl('leads'), [
        'title' => 'Deal for ' . $email . ' at ' . date('d-m-Y H:i'),
        'person_id' => $contactId,
        'bd0449a7ade1fa104321ebfe32832776893aba00' => $budget,
        '20bd831899a494d6d5bc2d538b165d65534d7c5c' => $about,
        '7cf4f42f1176eb222897785f57283aa4103dc48e' => $source,
        'ae1b7802a994f39f8ae8801ede19c6a6fa15f7eb' => $query,
    ]);

    $deal = json_decode($dealResponse, true);
    $dealId = (int)($deal['data']['id'] ?? 0);

    if (!$dealId) {
        return json_respond(['status' => 'error', 'cause' => 'deal id']);
    }

    emailNotification();
    return json_respond(['status' => 'ok']);
}

function emailNotification() {

    $mailer = new PHPMailer();

    try {
        $mailer->isSMTP();
        $mailer->CharSet = 'UTF-8';
        $mailer->SMTPAuth = false;
        $mailer->Host = 'smtp-relay.gmail.com';
        $mailer->Port = 587;
        $mailer->SMTPSecure = 'tls';

        $mailer->setFrom('hello@glow.team', 'Glow Team');
        $mailer->addAddress('hello@glow.team');

        $mailer->isHTML(true);
        $mailer->Subject = 'Contact form submission';

        $mailer->Body = "
            <b>Name:</b> ".post('name')."<br><br>
            <b>Email:</b> ".post('email')."<br><br>
            <b>Project:</b> ".implode(", ", post('services', []))."<br><br>
            <b>About:</b> ".post('project-about')."<br><br>
            <b>Budget:</b> ".post('budget')."<br><br>
            <b>Source:</b> ".post('source')."<br><br>
            <b>Query:</b> ".post('query')."
        ";

        $mailer->send();

    } catch (Exception $e) {}
}

function request_post($url, $data) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $data
    ]);
    $res = curl_exec($ch);
    curl_close($ch);
    return $res;
}

function request_post_json($url, $data) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json']
    ]);
    $res = curl_exec($ch);
    curl_close($ch);
    return $res;
}

function json_respond($data) {
    header('Content-Type: application/json');
    return json_encode($data);
}