//load first. not nec here, but taking no chances with SVGs
document.addEventListener("DOMContentLoaded", function(e) { 
  // need a list of words 
  const wordBank = ['pantaloons', 'knickers', 'bottoms', 'slacks', 'jeans', 'culottes', 'overalls', 'shorts', 'leggings', 'jeggings', 'cargo', 'britches', 'trousers', 'burmudas', 'bloomers', 'underpants', 'chaps', 'longjohns', 'corduroys', 'denims', 'drawers', 'dungarees', 'jodhpurs', 'boxers', 'capri', 'smarty', 'sassy'];
  
  // need to have an alphabet array 
	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	//variables for DOM elem
	const alpha = document.getElementById('alphabet');

  function play(){
    let userGuess;
    const randoWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
  	let misses = [];//will need to know how many bad guesses = a loss. 6
    console.log(misses);
  
    let randoWordArr = randoWord.split('');
    //convert the random word into dashes and put them into the DOM
    let wordArrDashes = randoWordArr.map(ltr => ' _ ');
    let dashesHTML = document.getElementById('word');
   
    dashesHTML.innerHTML = wordArrDashes;

    //dealing with getting the user's choice
    document.onkeyup = function(e) {
      // Determines which key was pressed.
      userGuess = e.key;
     //stop, validate, and listen
      if(alphabet.indexOf(userGuess) < 0){
        alert('That is not a letter. Please choose a letter.');
      }
      //if valid ..
      else{
        //if not in the word ...
        if(randoWordArr.indexOf(userGuess) === -1){
          misses.push(userGuess);
          //set opacity to 1 so the svg is seen
          for(let i = 0; i < misses.length; i++){
            let bodyPartSeen = document.getElementById(`body-${i+1}`);
              bodyPartSeen.style.opacity = "1";
          }
        //if in the word
        }
        else {
          // arr.forEach(function callback(currentValue, index, array) {
          //     //your iterator
          // }[, thisArg]);
          //for when the letter is in the rando word array:
          randoWordArr.forEach((ltr, idx) => {
            console.log(`letter is ${ltr} at index ${i}`);
            if(userGuess === ltr){
              wordArrDashes[idx] = ` ${ltr} `;
              dashesHTML.innerHTML = wordArrDashes;
            }
          })
          
        }
      }
    }

    //functions to check for win /loss

  	//make buttons for each letter of the alphabet
  	let alphaHTML = [];
  	for(let a = 0; a < alphabet.length; a++){
  		alphaHTML.push(`<div class="alphaBtn" id="${alphabet[a].toLowerCase()}">${alphabet[a]}</div>`);
  	}
  	console.log(alphaHTML[0]);
  	alpha.innerHTML = alphaHTML;
  }
  



play();


});

// PSEUDOCODE (it's been cut/copy/pasted/repasted, so out of order but these are my notes I started with)
//get the random word, for each letter, there's a dash or underline. display underlines
// need to make spaces/dashes for that word

//check indexOf word against letter guessed.
//swap out dash for correct letter
//incorrect guesses get posted and a body part appears. 
 //playing the game:
      //check if user choice is valid
        //if not valid, tell them to do it again
        //if it is valid, check if it's in the word
            //if it is not, push letter to bad guesses array
            //show a body part
            //when all body parts shown and exhibition hangman is deddernded, user loses.
            //if it is, replace dash with letter

// need to get user's guess for a letter (prompt, input, or button?)
// need to check user's guess against the randomword
// 	if it's correct, letter appears in place of the dash
// 	if it is incorrect, a body part is shown (so many jokes here) AND letter guessed is put into an incorrect box

// ?store guessed letters in another array and remove them from alpha?
// store incorrect guesses in an array. number of letters = number of parts shown?

// announce win or loss
// offer to play again