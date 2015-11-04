<?php

$data = [
	[ 'name' => 'Handri', 'age' => 17 ],
	[ 'name' => 'Adi', 'age' => 18 ],
	[ 'name' => 'Afrian', 'age' => 11 ],
	[ 'name' => 'Pay', 'age' => 17 ],
	[ 'name' => 'Wawan', 'age' => 14 ],
	[ 'name' => 'Fitrah', 'age' => 15 ],
];

if(isset($_GET['random']) && (bool) $_GET['random'] == true) {
	$randomKey = array_rand($data);
	echo json_encode($data[$randomKey]);	
	exit;
}



echo json_encode($data);
exit;