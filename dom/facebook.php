<?php


$pengguna = $_POST['namaPengguna'];
$kata_kunci = $_POST['kataKunci'];

header('Access-Control-Allow-Origin: *');
echo json_encode(['status' => 200, 'pengguna' => $pengguna , 'kata_kunci' => $kata_kunci], true);
exit;