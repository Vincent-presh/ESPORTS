<?php


$host="localhost"; // Host name 
$username="Vincent"; // Mysql username 
$password="7115p1israel"; // Mysql password 
$db_name="sporter"; // Database name 
//returning the last 15 messages
$conns=mysqli_connect("$host", "$username", "$password", "$db_name")or die("cannot connect"); 
$type=$_GET['type'];
$password=$_GET['password'];
if($type!="SUGs Cup"){
 $stteam =$_GET['stteam'];
 $ndteam =$_GET['ndteam'];
 $stteam = stripslashes($stteam);
$ndteam = stripslashes($ndteam);                                        
$stteam = mysqli_real_escape_string($conns, $stteam);
$ndteam = mysqli_real_escape_string($conns, $ndteam);
}

else if($type=="ICJCF Cup" || $type=="EXhibition" || $type=="Vcs Cup" || $type=="Deans Cup" || $type=="Hods Cup" || $type=="Hostel League"){
 $stteam =$_GET['stteamsu'];
 $ndteam =$_GET['ndteamsu'];
 $stteam = stripslashes($stteam);
$ndteam = stripslashes($ndteam);                                        
$stteam = mysqli_real_escape_string($conns, $stteam);
$ndteam = mysqli_real_escape_string($conns, $ndteam);
}
    else{
       echo 'Wrong Competition Value';
       return 0;
    }

$datetime=$_GET['mydate'];
   $maintime= strtotime($datetime);

$newTime = date("Y-m-d H:i:s", strtotime('+23 hours'));
$upperTime = date("Y-m-d H:i:s", strtotime('+2 hours', $maintime));
$lowerTime = date("Y-m-d H:i:s", strtotime('-2 hours', $maintime));


if ($datetime < $newTime) {
	
    echo 'You are too late for that time.';
     return 0;
}else{
   $que = mysqli_query($conns, "SELECT * FROM main WHERE password='$password'");
   if($que){
     $numRows12 = mysqli_num_rows($que);
     if($numRows12==0){
   echo "Wrong";
    return 0;
     }
     else{
       $quef = mysqli_query($conns, "SELECT * FROM fixes WHERE timew BETWEEN '$lowerTime' AND '$datetime' OR timew BETWEEN '$datetime' AND '$upperTime'");
    if($quef) {

$num2 = mysqli_num_rows($quef);

   if($num2==0){
             $quer = mysqli_query($conns, "INSERT INTO  fixes SET stteam='$stteam',  ndteam='$ndteam', typofcom='$type', timew ='$datetime'");
      if($quer){
        echo "success";
         return 0;
      }
      else{
        echo "wrong";
         return 0;
      }
   }

 else{
   echo 'That time is not availiable';
    return 0;
 }

   }
   else{
    echo "very wrong";
     return 0;
     }
   }
   }
   else{
   	echo "error";
     return 0;
   }

}