<?php

function get_db_conn() {
    $servername = "utacloud3.reclaimhosting.com";
    $username = "sst0847_siremar";
    $password = "Group24sps";
    $database = "sst0847_backend";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";

    return $conn;
}

?>