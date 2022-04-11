<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include_once('DB_Connection.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


try{
      // Check connection
      $connection= get_db_conn();
if ($connection -> connect_errno) {
    echo "Failed to connect to MySQL: " . $connection -> connect_error;
    exit();
  }
  $placeOfBirth = 'Place of Birth';
  $emailId = 'Email Id';
  $dateOfBirth = 'Date Of Birth';
  $phoneNumber = 'Phone Number';
$confirmPassword = 'Confirm Password';


  $stmt = $connection->prepare("INSERT INTO Users (Name, place_of_birth, email_id, date_of_birth, phone_number, Usertype, Password, confirm_password) VALUES (?, ?, ?, ?,?, ?, ?, ?)");

  $_POST['Name'] = 'Alexa';
    $_POST['place_of_birth'] = 'Britan';
     $_POST['email_id'] = 'alx@gmail.com';
     $_POST['date_of_birth'] = '2022-04-04'; 
     $_POST['phone_number'] = '4367839';
     $_POST['Usertype'] = 'Inspector';
     $_POST['Password'] = 'Alexa';
     $_POST['confirm_password'] = 'Alexa';

    $stmt->bind_param('ssssssss', $_POST['Name'], $_POST['place_of_birth'], $_POST['email_id'], $_POST['date_of_birth'], $_POST['phone_number'], $_POST['Usertype'], $_POST['Password'], $_POST['confirm_password']);
    

    $stmt->execute();
    var_dump();

   
} catch(Exception $e){
  echo $e->getMessage();
}
?>