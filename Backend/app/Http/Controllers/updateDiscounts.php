<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateDiscounts extends Controller
{
    public function uDiscounts(Request $request)
   {
        // Check connection
        $servername = "utacloud3.reclaimhosting.com";
        $username = "sst0847_siremar";
        $password = "Group24sps";
        $database = "sst0847_backend";

        // Create connection
        $connection = mysqli_connect($servername, $username, $password, $database);

        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        if ($connection->connect_errno) {
            echo "Failed to connect to MySQL: " . $connection->connect_error;
            exit();
        }

        $id = $_GET['id'];
        if (isset($_POST['update'])) {
            // if (true) {
            $discount = $_POST['discount'];
            $domain = $_POST['domain'];
            $expiryDate = $_POST['expiryDate'];
        
            $query = "UPDATE discounts SET discount=" . "'$discount'" . ", domain=" . "'$domain'" . ", expiryDate=" . "'$expiryDate'" . " WHERE id=" . "'$id'";
            echo $query;
            $result = $conn->query($query);
            if ($result == true) {
                echo "Record updated!";
        
                // fetch data and send to frontend
                $id = $_GET['id'];
                $query = "SELECT * FROM flights WHERE id=$id";
                $result = $conn->query($query);
                if ($result->numRows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $discount = $_POST['discount'];
                        $domain = $_POST['domain'];
                        $expiryDate = $_POST['expiryDate'];
                    }
                
                }
            } else {
                echo "Error occured!" . $query . "<br>" . $conn->error;
            }

    }
}
} 
