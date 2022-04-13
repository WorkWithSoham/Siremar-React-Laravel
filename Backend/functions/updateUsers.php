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
  $Name= $_POST['Name'];
  $place_of_birth= $_POST['place_of_birth'];
  $email_id= $_POST['email_id'];
  $date_of_birth= $_POST['date_of_birth'];
  $phone_number= $_POST['phone_number'];
  $userType= $_POST['userType'];
  $Password= $_POST['Password'];
  $confirm_password= $_POST['confirm_password'];


  $query= "UPDATE Users SET Name="."'$Name'".", place_of_birth="."'$place_of_birth'".", email_id="."'$email_id'".", date_of_birth="."'$date_of_birth'".", phone_number="."'$phone_number'".", userType="."'$userType'".", Password="."'$Password'".", confirm_password="."'$confirm_password'"." WHERE id="."'$id'";
  echo $query;
  $result= $conn->query($query);
  if($result==TRUE) {
    echo "Record updated!";

    // fetch data and send to frontend
    $id= $_GET['id'];
    $query= "SELECT * FROM flights WHERE id=$id";
    $result= $conn->query($query);
    if ($result->numRows>0) {
      while($row=$result->fetch_assoc()){
        $Name= $_POST['Name'];
  $place_of_birth= $_POST['place_of_birth'];
  $email_id= $_POST['email_id'];
  $date_of_birth= $_POST['date_of_birth'];
  $phone_number= $_POST['phone_number'];
  $userType= $_POST['userType'];
  $Password= $_POST['Password'];
  $confirm_password= $_POST['confirm_password'];
      }
    }

  }else{
    echo "Error occured!". $query. "<br>". $conn->error;
  }
}


?>