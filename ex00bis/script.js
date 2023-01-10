$(document).ready(function(){
     let borderRadius=0;
     let colors=["green","blue","red"];
     let i=0;
    $("#ballon").click(function(){
        //console.log($("#ballon").width())
        $("#ballon").css({"width":$("#ballon").width()+10+"px"});
        $("#ballon").css({"height":$("#ballon").height()+10+"px"});
        $("#ballon").css("border-radius",borderRadius+=10);
        $("#ballon").css("background-color",colors[i]);

        if(i>=2){
            i=0;
        }else{
            i++;
        }

        if($("#ballon").width()>=420){
            $("#ballon").css({"width":200+"px"});
            $("#ballon").css({"height":200+"px"});
            $("#ballon").css("border-radius",100);
        }

        let K=i;

        $("#ballon").hover(function(){
            alert("yes!")
          },
          function(){
            if(k<=0){
                k=2;
            }else{
                k--;
            }
            // $("#ballon").css("background-color",colors[k]);
            alert("test réussi!");


          });


    });

  });