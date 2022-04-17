<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include_once 'DB_Connection.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// Port will be removed once deployed on the cloud

try {
    // Check connection
    $connection = get_db_conn();
    if ($connection->connect_errno) {
        echo "Failed to connect to MySQL: " . $connection->connect_error;
        exit();
    }

    $stmt = $connection->prepare("INSERT INTO hospital (name, location, startTime, endTime, headDoctor) VALUES (?, ?, ?, ?,?)");

//    $_POST['name'] = 'Something';
//     $_POST['location'] = 'Some location';
//      $_POST['startTime'] = '23:16:18.341271';
//      $_POST['endTime'] = '23:16:18.341271';
//      $_POST['headDoctor'] = 'Pallavi';
    $stmt->bind_param('sssss', $_POST['name'], $_POST['location'], $_POST['startTime'], $_POST['endTime'], $_POST['headDoctor']);
    // $stmt->bind_param("146","something", "something", "23:16:18.341271", "23:16:18.341271", 'Pallavi');

    $stmt->execute();
    // var_dump($stmt);

} catch (Exception $e) {
    echo $e->getMessage();
}
