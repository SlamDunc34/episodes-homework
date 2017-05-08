//Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
//prints out my name is keith

//Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};
//function that changes original score from 5 to 3
console.log(result());
//prints out 3

//Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//creates array of animals
var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// new function overwrites original array

//Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';
//declares four variables with keys and values
var allSuspects = function() {
  var suspectThree = 'Harvey'
//overwrites name of suspect 3 locally
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};
//returns list of suspects with suspect 3 as Harvey

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
//returns suspect 3 as Keith

//Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};
//declared detective object with keys and values
var printName = function(detective) {
  return detective.name
};
//function returns name of original object
var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};
//function that overwrites original name
console.log(detectiveInfo());
//returns Poirot

//Episode 6

var murderer = 'rick';
//declared global variable for murderer
var outerFunction = function() {
  var murderer = 'marc';
//function with local variable for murderer
  var innerFunction = function() {
    murderer = 'valerie';
//another function with local variable for murderer without var
  }

  innerFunction();
// will return inner function as valerie
}

outerFunction();
console.log('the murderer is ', murderer);
// will return outer function as valerie because var is missing
