<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$h = $_SERVER['HTTP_HOST'];
if ($h === 'localhost:8000') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');  
  header("Access-Control-Allow-Headers: *");
}

emailNotification();


function pipeUrl($path) {
  $company_domain = 'glow-cdac99';
  $api_token = '418d3e3b3508c377a04b54e502d5868aa79f61ef';
  
  return 'https://'.$company_domain.'.pipedrive.com/v1/'.$path.'?api_token='.$api_token;
}

function get($key) {
  return isset($_GET[$key]) ? $_GET[$key] : null;
}

function post($key) {
  return isset($_POST[$key]) ? $_POST[$key] : null;
}

function formHandler() {
  $name = post('name');
  $company_name = post('company_name');
  $project = post('project');
  $project_about = post('project_about');
  $budget = post('budget');
  $email = post('email');
  // var_dump($name, $company_name, $_POST);
  //honeypot
  $phonenumber = post('phonenumber');
  // echo 'sending contact data...';
  // echo pipeUrl('persons');
  $contactResponse = request_post(pipeUrl('persons'), [
    'name' => $name,
    'email' => $email,
  ]);
  $contact = json_decode($contactResponse, true);
  // var_dump('contact response', $contactResponse, $contact);
  // die();
  $contactId = (int)$contact['data']['id'];
  if (empty($contactId)) {
    json_respond([
      'status' => 'error',
      'cause' => 'contact id',
      // 'error' => $contact,
      // 'error2' => $contactResponse,
    ]);
  }

  // echo 'sending deal data';
  $dealResponse = request_post(pipeUrl('deals'), [
    'title' => 'Deal for '.$email.' created at '.date('d-m-Y H:i'),
    'person_id' => $contactId,
    'fb1a3db4b31553291258fde336cc0ea56acb7bcc' => $company_name,
    '1f5bcebb4c2edf62c913c8f7a321f59375097dfc' => $project,
    '85590fb260bd65ce96864f3fa06a2bd6b507cb76' => $project_about,
    'bd0449a7ade1fa104321ebfe32832776893aba00' => $budget,
    'add_time' => date('Y-m-d H:i:s'),
  ]);

  // var_dump('deal response', $dealResponse);

  $deal = json_decode($dealResponse, true);
  $dealId = (int)$deal['data']['id'];
  if (empty($dealId)) {
    json_respond([
      'status' => 'error',
      'cause' => 'deal id'
    ]);
  }

  json_respond([
    'status' => 'ok'
  ]);
}

function emailNotification() {
  $mailer = new \PHPMailer\PHPMailer\PHPMailer();

  $name = post('name');
  $company_name = post('company_name');
  $project = post('project');
  $project_about = post('project_about');
  $budget = post('budget');
  $email = post('email');
  
  try {
    $mailer->SMTPDebug = 2;
    $mailer->isSMTP();
    $mailer->CharSet = 'UTF-8';
    $mailer->SMTPAuth = true;

    $mailer->Host = 'mail.privateemail.com';
    $mailer->Username = 'hello@glow.team';
    $mailer->Password = '5mKW>4ebgdWM';
    $mailer->Port = 465;
    $mailer->SMTPSecure = 'ssl';
    $mailer->setFrom('hello@glow.team', 'Glow Team');
    $mailer->addAddress('sergey.bogdan.vi@gmail.com');
    // $mailer->addAddress('hello@glow.team');
    // $mailer->addAddress('rusmashatov@gmail.com');

    $mailer->isHTML(true);
    $mailer->Subject = 'Contact form submission';
    $message = [
      'Name' => $name,
      'Email' => $email,
      'Company Name' => $company_name,
      'Project Type' => $project,
      'Project About' => $project_about,
      'Budget' => $budget,
    ];
    $msg = '';
    foreach ($message as $key => $value) {
      $msg .= "<b>$key:</b>$value<br><br>";
    }
    // var_dump($msg);
    // die();
    $mailer->Body = $msg;

    if ($mailer->send()) {
      return true;
    } else {
      return false;
    }


  } catch (Exception $e) {
    throw $e;
  }
  // $to = 'sergey.bogdan.vi@gmail.com';
  // $sub
}

function request_post($url, $data) {

  // var_dump($url, $data);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);
  // curl_setopt($ch, CURLOPT_HTTPHEADER, [
  //   'Content-Type' => 'application/json',
  //   'Accept' => 'application/json'
  // ]);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data);


  $response = curl_exec($ch);
  curl_close($ch);

  // if ($response === false) {
  //   var_dump(curl_error($ch), curl_errno($ch));
  //   die();
  // }
  // var_dump($url, $response);
  // die();
  return $response;
  // return $response;
}

function json_respond($data) {
  header('Content-type: application/json');
  echo json_encode($data);
  die();
}