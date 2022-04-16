<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include_once 'DB_Connection.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

try {
    // Check connection
    $connection = get_db_conn();
    if ($connection->connect_errno) {
        echo "Failed to connect to MySQL: " . $connection->connect_error;
        exit();
    }

    $stmt = $connection->prepare("INSERT INTO moveOut (userId, moveOutDate, currentLocation, reason) VALUES (?, ?, ?, ?)");
    // $_POST['userId'] = '6';
    //   $_POST['moveOutDate'] = '2022-07-07';
    //    $_POST['currentLocation'] = 'ghjhk';

    $stmt->bind_param('ssss', $_POST['userId'], $_POST['moveOutDate'], $_POST['currentLocation'], $_POST['reason']);

    $stmt->execute();
    // var_dump($stmt);

} catch (Exception $e) {
    echo $e->getMessage();
}
