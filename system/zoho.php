<?php
// require '../../../commons/common.php';
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$data = $_REQUEST;
if(empty($data['campaign'])) {
    // Takes raw data from the request
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
}

if(!isset($data["campaign"])) die("{'status': 'error', 'message' : 'Campaign not provided.'}");

$campaign = $data["campaign"];

$client = new Client(['http_errors' => false]); //GuzzleHttp\Client
$response = '';
try {
    $result = $client->post('https://creator.zoho.com/api/jithincn1/json/mad-recruit/form/Campaign_Track_Record/record/add', [
        'form_params' => [
			"authtoken" 	    => "cdcfd4eb1b77b0835f4339827906e42a",
			"scope" 		    => "creatorapi",
            'Vistor_IPAddress'  => $_SERVER['REMOTE_ADDR'],
			"Campaign_ID"	    => $campaign
        ]
    ]);
    $response = $result->getBody();
} catch (Exception $e) {
    // Can't send data to Zoho
} finally {
    if (stripos($response, 'success') !== false) { // Yes, a wierd way to check a json for sucess, but it is a wierd json string.
    	echo json_encode(['status' => 'success', 'message' => "Data pushed to Zoho"]);
	} else {
        echo json_encode(['status' => 'error', 'message' => "Failure encountered in Data pushed to Zoho"]);
        $fp = fopen('error.log', 'a');//opens file in append mode  
        fwrite($fp, $response);
        fclose($fp);  
    }
}