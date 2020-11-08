<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$data = $_REQUEST;
if(empty($data['name'])) {
	// Takes raw data from the request
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);
}

$client = new Client(['http_errors' => false]); //GuzzleHttp\Client
$response = '';
try {
    $result = $client->post('https://makeadiff.in/api/v1/users', [
        'form_params' => [
			"name" 		=> $data['name'],
			"sex" 		=> $data['sex'],
			"email" 	=> $data['email'],
			"phone" 	=> $data['phone'],
			"city_id" 	=> $data['city_id'],
			"source" 	=> $data['source'],
			"profile" 	=> isset($data['profile']) ? $$data['profile'] : '',
			"address" 	=> isset($data['address']) ? $data['address'] : '',
			"job_status"=> $data['job_status'],
			"why_mad" 	=> $data['why_mad'],
			"campaign" 	=> isset($data['campaign']) ? $data['campaign'] : '',
			'user_type'	=> 'applicant',
			"password" 	=> "pass"
        ],
        'auth' => ['data.simulation@makeadiff.in', 'pass']
    ]);
    $response = $result->getBody();
} catch (Exception $e) {
    // Can't send data to Zoho
    echo $response;
} finally {
    if ($response) {

    	echo $response; //json_encode(['status' => 'success', 'message' => "Volunteer Added"]);
	}
}