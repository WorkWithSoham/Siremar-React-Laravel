<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include_once('DB_Connection.php');

    /**
     * function to Delete a record
     */
    function delete($tableName, $id){
        $conn= get_db_conn();
        $sql= "DELETE FROM $tableName WHERE id= $id";
        // $sql = "SELECT 'id', name FROM users";
        $result = $conn->query($sql);
        echo 'below is result for delete';
        var_dump($result);
        // if ($result->num_rows > 0) {
        //     // output data of each row
        //     while($row = $result->fetch_assoc()) {
        //         echo "id: ". $row["id"]. " - Name: " . $row["name"]. "<br>";
        //     }
        
        // } else {
        //         echo "0 results";
        //     }
    }

    delete('schools', 133);


?>