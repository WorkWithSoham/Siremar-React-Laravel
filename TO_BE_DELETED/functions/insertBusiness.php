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

    $connection = get_db_conn();
    if ($connection->connect_errno) {
        echo "Failed to connect to MySQL: " . $connection->connect_error;
        exit();
    }

    $stmt = $connection->prepare("INSERT INTO business (Name, Owner, Type, Investment, StartedOn) VALUES (?, ?, ?, ?, ?)");

    $stmt->bind_param("sssss", $_POST['Name'], $_POST['Owner'], $_POST['Type'], $_POST['Investment'], $_POST['StartedOn']);

    $stmt->execute();

} catch (Exception $e) {
    echo $e->getMessage();
}
