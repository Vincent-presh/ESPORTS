   
$(document).ready(function(){

    $('a').click(function(event) {
 event.preventDefault();
});

});
 function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
           window.location =url;
        }
    }
function stripHTML(text){
   var regex = /(<([^>]+)>)/ig;
   return text.replace(regex, "");
}


function crate() {
  // body...

setTimeout(function getgame(){
   $.ajax({
    url: "http://localhost/sports/functions/allget.php?type=all",
    method: 'POST',
      dataType: 'text',
    success: function(data) {
       myObj=$.parseJSON(data);
     var element="<div style='width: 100%; height: 20px;color:#ADAEAD; text-align: center; padding-top: 6px;'>Recent matches</div>";
 for (var i = 0; i < myObj.length; i++) {
  if(i==0) {$("section.sectr").html("");}

  var stteam =myObj[i].stteam.toUpperCase();
  var ndteam= myObj[i].ndteam.toUpperCase();
  var comtype = myObj[i].typofcom;
  var timew= myObj[i].timew;
   element = "<div  class='item"+i+"' role='mwwerty' style='display: none;'><div role='header' class='mww-head'> <div class='comtype '> <b>.</b>  "+comtype+"  <b>.</b>  "+timew+"  <b>.</b> </div><object data='images/double-tick.png' type='image/png' height='23px' width='23px' style='float: right; margin-top: -20px; margin-right: 5px;'> </object> </div><div class='mww-head bodye'> <div style='width: 100%; height: 60%;''><div class='pdata animated-background circular'></div><div style='position: absolute; margin-left: 45%; margin-top: 5%;'>vs</div><div class='pdata animated-background circular'></div></div><div style='width: 100%; height: 20%;   margin-top: 20px;' class=''><div class='backrun e'>"+stteam+"</div><div class='backrun e'>"+ndteam+"</div></div></div></div>";

  document.getElementsByClassName("sectr")[0].insertAdjacentHTML('beforeend', element);
  $(".item"+i+"").fadeIn();

 }

    },
    error : function(json) 
                {
            
                }
  });
   return 0;
}, 3000);

}

function slidemenu(){
$("#sec-ou").toggleClass("closer");
}

	function slideform(){
	$("#modal").fadeIn();
		 $('#postbuttr').click(function(event) {
sendfake();
  });
	}

	function slideclose(){
	$("#modal").fadeOut('fast');
	}


  $('select.typecom').on('change', function() {
   if( $("select.typecom option:selected").val()!="SUGs Cup"){
     $(".sug").fadeOut('fast');
       $(".norm").fadeIn('fast');
   }
   else{
  $(".sug").fadeIn('fast');
   $(".norm").fadeOut('fast');
   }
    });

function sendfake() {
	var password = stripHTML($("#password").val());
	var type= stripHTML($("select.typecom option:selected").val());
	var stteam=stripHTML($(".stteam.norm").val());
	var ndteam= stripHTML($(".ndteam.norm").val());
	var stteamsu = stripHTML($(".stteam.sug").val());
	var ndteamsu=stripHTML($(".ndteam.sug").val());
	if( ( password!="" ) && ( ( ( stteam!="" ) && ( ndteam!="" ) ) || ( (ndteamsu!="") &&(stteamsu!="")  ) )  ){
 var isoStr = new Date().toISOString();
  var datetime = $('#datetimes').val();
     $.ajax({
    url: "http://localhost/sports/functions/inpugame.php?type="+type+"&mydate="+datetime+"&password="+password+"&stteam="+stteam+"&ndteam="+ndteam+"&stteamsu="+stteamsu+"&ndteamsu="+ndteamsu+"",
    method: 'POST',
    success: function(data) {
    	if(data=="success"){
         $("#progress").fadeIn('fast');
         move();
          $('#postbuttr').click(function(event) {
return 0;
  });
slideclose();
    	}
    	else{
    		alert(data);
    	}
    },
    error : function(json) 
                {
            
                }
  });
}
else{
	$("#password").css({
		border: "1px solid red"
	});
}
}


function Opensugg() {
  // body...
  var element ='<div id="suggert" class="frit" role="mwwerty"> <div class="per-point" style="padding-left: 30px;"><header>Select Your day</header> <input role="select" class="" style="width: 84%;" id="datetimes" type="date" name="suggestday" min="2000-13-13" required> <button class="finaler">Suggest</button></div><div class="per-point" style="padding-right: 30px;"></div></div>';
$("section.sectr").html(element);

}


function getpass(pass) {
return document.getElementById("password").value;
}

   function move() {
  var elem = document.getElementById("bar");   
  var width = 10;
  var idst = setInterval(frame, 20);

  function frame() {
    if (width == 96) {
    	  $("#progress").fadeOut('fast');
      clearInterval(idst);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}



	function ezxpand(){
		var obj= document.getElementById("search-opp");
		if(obj.style.width=="140px"){
			 $("#search-opp").animate({
                    width: '350px'
                 });
		}
		else{
		
		}
	}

function addmet(){

}

function addposi(){
$("#sec-ou").addClass("posryrion");
}

	function slidepage(){
		ChangeUrl('Main', 'http://localhost/sports/Relive');
	$.get("flier.php", {}, function(data){
$('#mainyr').html(data);
});
	}
    $(document).ready(function () {
    $("section").niceScroll({ autohidemode: true })
});


var locator ="";
    window.addEventListener("popstate", function(){
  var pathArray = window.location.pathname.split('/');
 if(pathArray[1]=="sports" && pathArray[2]==""){
    var locator = "exert.php";
  }
  else if(pathArray[1]=="sports" && pathArray[2]=="Relive"){
var locator ="flier.php";

}

   $.get(locator, {}, function(data){
    $("#mainyr").html(data);
});
 });