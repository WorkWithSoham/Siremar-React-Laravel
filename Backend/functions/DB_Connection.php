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

$conn = get_db_conn();

$sql = "SELECT 'id', name FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. "<br>";
    }
} else {
    echo "0 results";
}

?>