var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var storyText;
var insertX;
var insertY;
var insertZ;

storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
insertY = ["the soup kitchen", "Disneyland", "the White House"];
insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714386);
    weight = weight + " stone";
    var temperature =  Math.round((94-32)*(5/9));
    temperature = temperature + " centigrade";
    newStory = storyText.replace("94 farenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);

  }



  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  newStory = newStory.replace(":insertx:", xItem);

  if(customName.value != 'Bob') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
  }



  story.textContent = newStory;
  story.style.visibility = 'visible';
}
