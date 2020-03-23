$(document).ready(function () {
           $("button").click(function () {
               $("#issInformation").load("data/issInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#issInformation").fadeOut("slow").fadeIn("slow");
       }
