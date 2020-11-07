<!DOCTYPE html>
<html>
<head>
	<title>Funaab Sports</title>
		<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="http://localhost/sports/images/icon.png" type="image/x-icon">
  <script src="http://localhost/Exercises/jquery.min.js"></script>
	 <link type="text/css" rel="stylesheet" href="http://localhost/sports/css/main.css" media="all" />
<script type="text/javascript" src="js/jquery.nicescroll-master/jquery.nicescroll.js"></script>

<script type="text/javascript" src='http://localhost/sports/js/main.js'></script>

</head>
<body>


	<div id="mainyr">
		<div role="bacher">
			<img id="ime1" class="mySlides" role="imebat" src="http://localhost/sports/images/page.jpeg" height="100%" width="100%">	
			<img id="ime2" class="mySlides" role="imebat" src="http://localhost/sports/images/the-ball-stadion-football-the-pitch-47730.jpeg" height="100%" width="100%">	
		<img id="ime3" class="mySlides" role="imebat" src="http://localhost/sports/images/soccer-player-kicking-ball-in-stadium-picture-id507687506.jpeg" height="100%" width="100%">	
			<img id="ime4" class="mySlides" role="imebat" src="http://localhost/sports/images/soccer-player-kicking-ball-in-stadium-picture-id504639098.jpeg" height="100%" width="100%">	
		</div>
<script type="text/javascript">
		var myIndex = 0;
	carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2700);    
}
</script>
<div id="maint">
<div role="header">
	<div id="risvb" style=""><img id="logo" role="lohtt" src="http://localhost/sports/images/funaab.jpg" height="100%" width="10%"> <div id="nameger" style="">FUNAAB SPORTS</div></div>
	<button id="relate" onclick="slidepage();"><a role="button">Relive</a></button>
</div>
</div>
</div>
<div id="footer" style="text-align: left;margin-left: 60px;"> @Funaab CSC  #Group2</div>
</body>
</html>