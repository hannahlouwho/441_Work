var imageArray = ["images/fire.jpg", "images/life.jpg", "images/bright.jpg"];
$(document).ready(function(){


    $("button").click(function(){

        //$("#stuff").animate({top:400});
        fadeImage1();
        moveSquare1();
        moveSquare1();
        moveSquare1();
        moveSquare2();
        moveSquare2();
        moveSquare2();
        image1Move();
        image2Move();
        image3Move();


        $("#third").toggle();
        fadeText(); // you want to call your method to make the text fade out and in
          // setInterval(moveSquare, 1000);

       // $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});


function moveSquare1()
{
    $("#square1").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
function moveSquare2()
{
    $("#square2").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
function image1Move()
{
  $("#image1").animate({left:250}).animate({top:800}).animate({left:0}).animate({top:1000});  // top instead of down
}
function image2Move()
{
  $("#image2").animate({left:0}).animate({top:100}).animate({left:0}).animate({top:400});  //top instead of down
}
function image3Move()
{
  $("#image3").animate({left:100}).animate({top:100}).animate({left:0}).animate({top:600});  //top instead of down
}

function fadeText()
{
  $( ".stuff" ).fadeOut( "slow").fadeIn("slow"); 

}
function fadeImage1()
{
$("#image1").fadeOut("slow").fadeIn("slow", function(){
$("#image1", "#image2", "#image3").attr("src", imageArray[randomNumber]);
});
}
var randomNumber = Math.floor(Math.random() * 3);
