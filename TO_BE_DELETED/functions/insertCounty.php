<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include_once 'DB_Connection.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

try {
    $_POST = $request->all();
    // Check connection
    $connection = get_db_conn();
    if ($connection->connect_errno) {
        echo "Failed to connect to MySQL: " . $connection->connect_error;
        exit();
    }

    $stmt = $connection->prepare("INSERT INTO county (name, population, bussiness, hospital, event, school) VALUES (?, ?, ?, ?,?, ?)");

    // $_POST['name'] = 'Something';
    //   $_POST['population'] = '4567';
    //    $_POST['bussiness'] = '23';
    //    $_POST['hospital'] = '235';
    //    $_POST['event'] = '98';
    //    $_POST['school'] = '67';

    $stmt->bind_param('ssssss', $_POST['name'], $_POST['population'], $_POST['bussiness'], $_POST['hospital'], $_POST['event'], $_POST['school']);
    // $stmt->bind_param("146","something", "something", "23:16:18.341271", "23:16:18.341271", 'Pallavi');

    $stmt->execute();
    // var_dump($stmt);

} catch (Exception $e) {
    echo $e->getMessage();
}
