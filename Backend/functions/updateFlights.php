<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include_once('DB_Connection.php');

$conn= get_db_conn();
$id= $_GET['id'];
if (isset($_POST['update'])) {
  // if (true) {  
  $flightNumber= $_POST['flightNumber'];
  $departureTime= $_POST['departureTime'];
  $arrivalTime= $_POST['arrivalTime'];
  $departureLocation= $_POST['departureLocation'];
  $arrivalLocation= $_POST['arrivalLocation'];


  $query= "UPDATE flights SET flightNumber="."'$flightNumber'".", departureTime="."'$departureTime'".", arrivalTime="."'$arrivalTime'"." WHERE id="."'$id'";
  echo $query;
  $result= $conn->query($query);
  if($result==TRUE) {
    echo "Record updated!";

    // fetch data and send to frontend
    $id= $_GET['Id'];
    $query= "SELECT * FROM flights WHERE id=$id";
    $result= $conn->query($query);
    if ($result->numRows>0) {
      while($row=$result->fetch_assoc()){
        $flightNumber= $_POST['flightNumber'];
  $departureTime= $_POST['departureTime'];
  $arrivalTime= $_POST['arrivalTime'];
  $departureLocation= $_POST['departureLocation'];
  $arrivalLocation= $_POST['arrivalLocation'];
      }
    }

  }else{
    echo "Error occured!". $query. "<br>". $conn->error;
  }
}


?>