import { MyLetters, Poem} from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var myLetters = new MyLetters();

console.log(myLetters.vowels);

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const lineOne = $("input#poemInput1").val();
    const lineTwo = $("input#poemInput2").val();
    const lineThree = $("input#poemInput3").val();
    let poem = new Poem(lineOne, lineTwo, lineThree)

    var newLineOne = poem.convertString(lineOne);
    var newLineTwo = poem.convertString(lineTwo);
    var newLineThree = poem.convertString(lineThree);

    var a = newLineOne[0];

    function counter(){

      var wordCount = 0;
      for (var b = 0; b < newLineOne.length; b++){
          for (var i=0; i < newLineOne[b].length; i++){
              for (var j =0; j < myLetters.vowels.length; j++){
                if (newLineOne[b][i] == myLetters.vowels[j]){
                  wordCount += 1;

                }
              }

          }
        }
      return wordCount
    }
      console.log(counter(a));
  });

});
