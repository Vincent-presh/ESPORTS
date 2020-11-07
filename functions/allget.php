<?php
 header("Content-Type: application/json; charset=UTF-8");
$host="localhost"; // Host name 
$username="Vincent"; // Mysql username 
$password="7115p1israel"; // Mysql password 
$db_name="sporter"; // Database name 
//returning the last 15 messages
$conns=new mysqli("$host", "$username", "$password", "$db_name"); 
  $result = $conns->query("SELECT * FROM fixes Order By timew DESC LIMIT 10");
$outp = array();
$outp = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($outp);

?>