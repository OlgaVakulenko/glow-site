<?php

$h = $_SERVER['HTTP_HOST'];
if ($h === 'localhost:8000') {
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST');  
  header("Access-Control-Allow-Headers: *");
}


$name = post('name');
$company_name = post('company_name');
$project = post('project');
$project_about = post('project_about');
$budget = post('budget');
$email = post('email');
$phonenumber = post('phonenumber');

header('Content-type: application/json');
echo json_encode([
  'status' => 'ok',
  'payload' => [
    'name' => $name,
    'company_name' => $company_name,
    'project' => $project,
    'budget' => $budget,
    'email' => $email,
  ]
]);
die();

function get($key) {
  return isset($_GET[$key]) ? $_GET[$key] : null;
}

function post($key) {
  return isset($_POST[$key]) ? $_POST[$key] : null;
}
