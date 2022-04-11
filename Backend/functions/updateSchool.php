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
  $name= $_POST['name'];
  $population= $_POST['population'];
  $business= $_POST['business'];
  $hospital= $_POST['hospital'];
  $event= $_POST['event'];
  $school= $_POST['school'];

  $query= "UPDATE county SET name="."'$name'".", population="."'$population'".", business="."'$business'"." WHERE id="."'$id'";
  echo $query;
  $result= $conn->query($query);
  if($result==TRUE) {
    echo "Record updated!";

    // fetch data and send to frontend
    $id= $_GET['id'];
    $query= "SELECT * FROM schools WHERE id=$id";
    $result= $conn->query($query);
    if ($result->numRows>0) {
      while($row=$result->fetch_assoc()){
        $name= $_POST['name'];
        $population= $_POST['population'];
        $business= $_POST['business'];
        $hospital= $_POST['hospital'];
        $event= $_POST['event'];
        $school= $_POST['school'];
      }
    }

  }else{
    echo "Error occured!". $query. "<br>". $conn->error;
  }
}


?>