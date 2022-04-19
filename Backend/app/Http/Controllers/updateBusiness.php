<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class updateBusiness extends Controller
{
    public function uBusiness(Request $request)
    {
        $Id = $_GET['Id'];
        if (isset($_POST['update'])) {
            // if (true) {
            $Name = $_POST['Name'];
            $Owner = $_POST['Owner'];
            $Type = $_POST['Type'];
            $Investment = $_POST['Investment'];
            $StartedOn = $_POST['StartedOn'];
        
            $query = "UPDATE business SET Name=" . "'$Name'" . ", Owner=" . "'$Owner'" . ", Type=" . "'$Type'" . ", Investment=" . "'$Investment'" . ", StartedOn=" . "'$StartedOn'" . " WHERE Id=" . "'$Id'";
            echo $query;
            $result = $conn->query($query);
            if ($result == true) {
                echo "Record updated!";
        
                // fetch data and send to frontend
                $id = $_GET['Id'];
                $query = "SELECT * FROM business WHERE Id=$Id";
                $result = $conn->query($query);
                if ($result->numRows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        $Name = $_POST['Name'];
                        $Owner = $_POST['Owner'];
                        $Type = $_POST['Type'];
                        $Investment = $_POST['Investment'];
                        $StartedOn = $_POST['StartedOn'];
                    }
                }
        
            } else {
                echo "Error occured!" . $query . "<br>" . $conn->error;
            }
        }
        
    }
}
