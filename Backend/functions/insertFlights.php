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
  
  $stmt = $connection->prepare("INSERT INTO flights (flightNumber, departureTime, arrivalTime, departureLocation, arrivalLocation) VALUES (?, ?, ?, ?,?)");

  // $_POST['flightNumber'] = 'A2356';
  //   $_POST['departureTime'] = '2022-07-07 02:24:35.771000';
  //    $_POST['arrivalTime'] = '2022-05-18 10:24:35.03600';
  //    $_POST['departureLocation'] = 'dfg'; 
  //    $_POST['arrivalLocation'] = 'dfs';
    
    $stmt->bind_param('sssss',$_POST['flightNumber'], $_POST['departureTime'], $_POST['arrivalTime'], $_POST['departureLocation'], $_POST['arrivalLocation']);
    

    $stmt->execute();
    // var_dump($stmt);

   
} catch(Exception $e){
  echo $e->getMessage();
}
?>