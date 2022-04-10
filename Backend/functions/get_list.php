<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
include_once('DB_Connection.php');

    /**
     * function to fetch get list
     */
    function getList($tableName){
        $conn= get_db_conn();
        $sql= "SELECT * FROM $tableName";
        // $sql = "SELECT 'id', name FROM users";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            $rows= [];
            $index = 0;
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $rows[$index] = $row;
                $index++;
            }
            print_r(json_encode($rows));
        
        } else {
                echo "0 results";
            }
    }

    getList($_POST['table']);


?>