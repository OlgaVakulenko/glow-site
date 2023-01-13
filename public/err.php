<?php

if (isset($_POST['err'])) {
  $token = '5819749356:AAFRP81CmGHBChSd96Sw0SHgZCWOexgXoVY';
  $chatId = '399466238';
  $data = json_decode($_POST['err'], true);
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "https://api.telegram.org/bot$token/sendMessage");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, true);

  curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'chat_id' => $chatId,
    'text' => $_POST['err'],
  ]);

  $response = curl_exec($ch);
  curl_close($ch);

  var_dump($response, $_POST['err']);
}
