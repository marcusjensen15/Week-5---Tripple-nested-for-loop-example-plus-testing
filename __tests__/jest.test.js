
//Example testing for template//

import { MyLetters, Poem } from './../src/dice-game.js'

// describe('MyObject', () => {
//
//     test('should record three numbers from the user', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.number1).toEqual(4);
//       expect(myObject.number2).toEqual(6);
//       expect(myObject.number3).toEqual(9);
//
//
//     });
//
// });

describe('Poem', () => {

    test('should record three strings from the user', () => {
      var poem = new Poem("Hello","why","oink");
      expect(poem.lineOne).toEqual("Hello");
      expect(poem.lineTwo).toEqual("why");
      expect(poem.lineThree).toEqual("oink");
    });
});

describe('Poem', () => {

    test('should convert an input to an array of words broken at each space ', () => {
      var poem = new Poem("Hello my name","why is something","oink howdy fun");
      expect(poem.convertString(poem.lineOne)).toEqual(["Hello","my","name"]);
      expect(poem.convertString(poem.lineTwo)).toEqual(["why", "is", "something"]);
      expect(poem.convertString(poem.lineThree)).toEqual(["oink", "howdy", "fun"]);
    });
});

// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(24);
//
//     });
//
// });
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject2(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(10);
//
//     });
//
// });


//Example testing for template//
