<?php

$name = $_POST['name-callback'];
$phone = $_POST['phone-callback'];

foreach ($propArray as $selectedValue) {
    $propText .= $selectedValue . ", ";
}
$propText = rtrim($propText, ", ");
$time = $_POST['time'];
$mortgage = $_POST['mortgage'];
$obligations = $_POST['obligations'];
$token = "6826186680:AAFWlSL8A8xN3n-PxmSXF_aqqhIbrBXD9NM";
$chat_id = "-1001975915594";
$arr = array(
  'ТИП ЗАЯВКИ: ' => 'Обратный звонок',
  'ФИО полььзователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>