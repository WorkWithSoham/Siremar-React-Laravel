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
        $result = $conn->query($sql);
        var_dump($result);
    }

    delete('schools', 133);


?>