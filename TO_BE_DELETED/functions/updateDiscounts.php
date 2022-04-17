<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include_once 'DB_Connection.php';

$conn = get_db_conn();
$id = $_GET['id'];
if (isset($_POST['update'])) {
    // if (true) {
    $discount = $_POST['discount'];
    $domain = $_POST['domain'];
    $expiryDate = $_POST['expiryDate'];

    $query = "UPDATE discounts SET discount=" . "'$discount'" . ", domain=" . "'$domain'" . ", expiryDate=" . "'$expiryDate'" . " WHERE id=" . "'$id'";
    echo $query;
    $result = $conn->query($query);
    if ($result == true) {
        echo "Record updated!";

        // fetch data and send to frontend
        $id = $_GET['id'];
        $query = "SELECT * FROM flights WHERE id=$id";
        $result = $conn->query($query);
        if ($result->numRows > 0) {
            while ($row = $result->fetch_assoc()) {
                $discount = $_POST['discount'];
                $domain = $_POST['domain'];
                $expiryDate = $_POST['expiryDate'];
            }
        }

    } else {
        echo "Error occured!" . $query . "<br>" . $conn->error;
    }
}
