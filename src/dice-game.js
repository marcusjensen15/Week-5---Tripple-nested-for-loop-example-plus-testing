//Example code for running tests in jest.test.js//

// export var MyObject = function(number1,number2,number3){
//
//   this.number1 = number1,
//   this.number2= number2,
//   this.number3 = number3
//
// }
//
// MyObject.prototype.multiplyNumbers = function() {
//   var multiply = this.number1 * this.number2;
//   return multiply;
// }
//
// export var MyObject2 = function(number1,number2,number3){
//
//   this.number1 = number1,
//   this.number2= number2,
//   this.number3 = number3
//
// }
//
// MyObject2.prototype.multiplyNumbers = function() {
//   var multiply = this.number1 + this.number2;
//   return multiply;
// }

//Example code for running tests in jest.test.js//
//
// FrontEnd:
//
// -3 Inputs
//   First line has five syllables
//   Second line has seven syllables
//   Third has five syllables
//
// -Area to confirm if the poem or not is a Haiku
//
// Backend:
// -check if poem has 3 lines
// -need to check to make sure the 1st and 3rd lines have 5 syllables
//
//
// -function to count number of syllables in a string
//   -Each syllable is represented by a vowel until it hits a consanant (or multiple vowels)
//   -if the word ends with a vowel it is ignored that vowel is ignored
//   -if more than one vowel is in a row, the following vowels are ignored

// console.log("hello");
//
//   export var test4 = function() {
//   console.log('this is the back-end 2');
// };
// export var test5 = function() {
// console.log('this is the back-end 26');
// };
//
// test4();
// test5();

export var MyLetters = function(){
   this.vowels = ["a","e","i","o","u"];
   this.consanants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
}

export var Poem = function(lineOne, lineTwo, lineThree){
  this.lineOne = lineOne
  this.lineTwo = lineTwo
  this.lineThree = lineThree
  this.syllableCount = 0;
}

Poem.prototype.convertString = function(string){
  var result = string.split(" ");
  return result;
}

Poem.prototype.syllables = function(){

}

// export var vowels = ["a","e","i","o","u"];
// export var consanants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
