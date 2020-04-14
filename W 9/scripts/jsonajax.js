$(document).ready(function() {
    $("button").click(function() {
        $("#issInformation").load("data/issposition.json", function(responseText) {
            var iss = JSON.parse(responseText);
            $("#issInformation").html("latitude: " + iss[1].latitude +
                "<br>longitude:" + iss[1].longitude + "<br>timestamp:" + iss[1].timestamp + "<br>message:");
        });
    });
});

/* function fadeText()
 {
     $("#issInformation").fadeOut("slow").fadeIn("slow");
 }
 */