$(document).ready(function () {
           $("button").click(function () {
               $("#issInformation").load("data/issposition.json", function(responseText){
                   var iss = JSON.parse(responseText);
                   $("#issInformation").html("latitude: " + iss.latitude
                   + "<br>longitude:" + iss.longitude + "<br>timestamp:" + iss.timestamp + "<br>message:");
               });
           });
       });

      /* function fadeText()
       {
           $("#issInformation").fadeOut("slow").fadeIn("slow");
       }
       */
