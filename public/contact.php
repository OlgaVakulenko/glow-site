<?php

// $headers = get_headers()

$name = post('name');
$phonenumber = post('phonenumber');

header('Content-type: application/json');
echo json_encode([
  'status' => 'ok',
]);
die();

function get($key) {
  return isset($_GET[$key]) ? $_GET[$key] : null;
}

function post($key) {
  return isset($_POST[$key]) ? $_POST[$key] : null;
}