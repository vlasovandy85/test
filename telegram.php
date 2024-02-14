<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$sum = $_POST['sum'];
$propArray = $_POST['prop'];
$propText = "";
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
  'ТИП ЗАЯВКИ: ' => 'Заявка',
  'ФИО полььзователя: ' => $name,
  'Телефон: ' => $phone,
  'Сума долгов: ' => $sum,
  'Имущество: ' => $propText,
  'Сколько времени не оплачивает долги? - ' => $time,
  'Есть действующая ипотека или автокредит? - ' => $mortgage,
  'Есть обязательства по выплате алиментов? - ' => $obligations
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