$(document).ready(function(){
    $("#ballon").click(function(){

        //console.log($("#ballon").width())
        $("#ballon").css({"width":$("#ballon").width()+10+"px"});
        $("#ballon").css({"height":$("#ballon").height()+10+"px"});
        $("#ballon").css({"border-radius":$("#ballon").border-radius()+10+"px"});
    });

  });