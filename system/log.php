<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$data = $_REQUEST;
if(empty($data['name'])) {
	// Takes raw data from the request
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);
}

// header("Content-Type: text/plain");
// $graphql = 'mutation { createLog(name: "'. $data['name'] .'", log: "'. escape($data['log']) .'") }';

$client = new Client(['http_errors' => false]); //GuzzleHttp\Client
$response = '';
try {
    $result = $client->request('post', 'https://makeadiff.in/api/v1/logs', [ // https://makeadiff.in/api/graphql
    // $result = $client->request('post', 'http://localhost/MAD/apprenticeship/system/test.php', [
       	// 'body' => $graphql,
       	'form_params' => [
       		// 'query' => $graphql,
       		'name'	=> $data['name'],
       		'log'	=> $data['log'],
       		'level'	=> isset($data['level']) ? $data['level'] : 'info',
       	],
        // 'auth' => ['data.simulation@makeadiff.in', 'pass'],
        'headers' => [
        	'Authorization' => 'Basic c3VsdS5zaW11bGF0aW9uQG1ha2VhZGlmZi5pbjpwYXNz',
        	// 'Content-Type' => 'application/json'
        ]
    ]);
    $response = $result->getBody();
} catch (Exception $e) {
    echo "ERROR: " . $response;
} finally {
    if ($response) {
    	echo $response . "\n"; //json_encode(['status' => 'success', 'message' => "Volunteer Added"]);
    	// echo $graphql . "\n";
	}
}

function escape($string) {
	return addslashes($string);
}