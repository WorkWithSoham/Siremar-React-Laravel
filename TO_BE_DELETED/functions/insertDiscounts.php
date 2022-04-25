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

    $stmt = $connection->prepare("INSERT INTO discounts (discount, domain, expiryDate) VALUES (?, ?, ?)");

    // $_POST['discount'] = 'Something';
    //   $_POST['domain'] = '4567';
    //    $_POST['expiryDate'] = '23';

    $stmt->bind_param('sss', $_POST['discount'], $_POST['domain'], $_POST['expiryDate']);

    $stmt->execute();
    // var_dump($stmt);

} catch (Exception $e) {
    echo $e->getMessage();
}
