var myViewFinderArray = new Array();


class ViewFinder
{
  constructor(title, image, description, year)
  {
    this.title = title;
    this.image = image;
    this.description = description;
    this.year = year;
  }

  toString()
  {
    return "Title:" + this.title;
    return "Image:" + this.image;
    return "Description:" + this.description;
    return "Year:" + this.year;
  }
  get theTitle()
  {
    return this.title;
  }
  get theImage()
  {
    return this.image;
  }
  get theDescription()
  {
    return this.description;
  }
  get theYear()
  {
    return this.year;
  }

}



function initializeArray()
{
  /* struggling to make my images appear.... Ill come in
  */
  var myViewFinder = new ViewFinder("kitty #1", "images/cat1.png", "Selfie Kitty", "2020");
  var myViewFinder1 = new ViewFinder("kitty #2", "images/cat2.png", "Fuzzy Wuzzy Wuz Angry", "2020");
  var myViewFinder2 = new ViewFinder("kitty #3", "images/cat3.png", "Lil snoot boop bread bitty", "2020");
  var myViewFinder3 = new ViewFinder("kitty #4", "images/cat4.png", "Wazzup Kitty", "2020");
  var myViewFinder4 = new ViewFinder("kitty #5", "images/cat5.png", "Smiley Kitty", "2020");
  myViewFinderArray.push(myViewFinder);
  myViewFinderArray.push(myViewFinder1);
  myViewFinderArray.push(myViewFinder2);
  myViewFinderArray.push(myViewFinder3);
  myViewFinderArray.push(myViewFinder4);

}

function accessInformation()
{
  // Random image from array math.random
  var random = myViewFinderArray[Math.floor(Math.random() * myViewFinderArray.length)];
	var myViewFinder = new ViewFinder("kitty #1", "images/cat1.png", "Selfie Kitty", "2020");
  var myViewFinder1 = new ViewFinder("kitty #2", "images/cat2.png", "Fuzzy Wuzzy Wuz Angry", "2020");
  var myViewFinder2 = new ViewFinder("kitty #3", "images/cat3.png", "Lil snoot boop bread bitty", "2020");
  var myViewFinder3 = new ViewFinder("kitty #4", "images/cat4.png", "Wazzup Kitty", "2020");
  var myViewFinder4 = new ViewFinder("kitty #5", "images/cat5.png", "Smiley Kitty", "2020");
  document.getElementById("image").innerHTML = random.theImage;
  document.getElementById("description").innerHTML = random.theDescription;
  document.getElementById("year").innerHTML = random.theYear;
}
