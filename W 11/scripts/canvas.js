var bgColors = ["pink", "yellow", "orange", "black", "green", "red", "purple",
];
function getRandomColor() {
  var letters = 'rgb';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
    return color;
  }
function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

function bg_changer(color_array) {
    $(document).ready(function () {
        // get a random color from your array. Then, you can continue,
        // otherwise it will stop when you get to the end of the array
        $('#myCanvas').css("background-color", color_array[(Math.floor(Math.random()*bgColors.length))]);
    });
}
class Rect {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    get X()
    {
        return this.x;
    }
    get Y()
    {
        return this.y;
    }
    get W()
    {
        return this.width;
    }
    get H()
    {
        return this.height;
    }
}
let object1 = new Rect(200, 125, 50, 50, "pink");
let object2 = new Rect(20, 5, 13, 46, "black");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
let xMove = 9;
let yMove = 9;
var i = 0;
setInterval(update, 500 / 30);
drawSquare();
function update()
{
    if (object1.x <= 0) {
        object1.x = 1;
        bg_changer(bgColors);
    }
    if (object1.x >= 500) {
        object1.x = 599;
        bg_changer(bgColors);
    }
    if (object1.y <= 0) {
        object1.y = 1;
        bg_changer(bgColors);
    }
    if (object1.y >= 300) {
        object1.y = 299;
        bg_changer(bgColors);
    }
    object2.x -= xMove;
    if (object2.x <= 0 || object2.x >= 800 - object2.width) {

        xMove *= -1;
        bg_changer(bgColors);
    }
    object2.y -= yMove;
    // add the hasCollided here to see if the autonomous square hits the player
    if(hasCollided(object1,object2))
        {
            object2.height = Math.floor((Math.random() * 3) - 100);
            yMove *= -1;
            xMove *= -1;
            object1.color = getRandomColor();
            bg_changer(bgColors);
        }
    if (object2.y <= 0 || object2.y >= 600 - object2.height) {
        yMove *= -1;
        bg_changer(bgColors);
    }
    drawSquare();
}
function hasCollided(object1, object2) {
  //use the getters for the class
    return !(
        ((object1.Y + object1.H) < (object2.Y)) ||
        (object1.Y > (object2.Y + object2.H)) ||
        ((object1.X + object1.W) < object2.X) ||
        (object1.X > (object2.X + object2.W))
    );
  //  window.alert("collision = true");
}
function drawSquare()
{
    ctx.clearRect(100, 100, 400, 300);
    ctx.fillStyle = object1.color;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    ctx2.fillStyle = object2.color;
    ctx2.fillRect(object2.x, object2.y, object2.width, object2.height);
}
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w")
    {
        moveUp();
    } else if (actualLetter == "a")
    {
        moveLeft();
    } else if (actualLetter == "d")
    {
        moveRight();
    } else if (actualLetter == "s")
    {
        moveDown();
    }
    drawSquare();
}
function moveUp()
{
    object1.y -= 20;
}
function moveLeft()
{
    object1.x -= 20;
}
function moveRight()
{
    object1.x += 20;
}
function moveDown()
{
    object1.y += 20;
}
// check for collision
if(hasCollided(object1,object2))
{
    bg_changer(bgColors);
    object1.color = getRandomColor();
  //  object2.width = Math.floor((Math.random() * 6));
    yMove *= -1;
    xMove *= -1;
}
</script>

</body>


</html>
