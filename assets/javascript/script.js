//load first. not nec here, but taking no chances with SVGs
document.addEventListener("DOMContentLoaded", function(e) { 
  console.log("if you see me, you dun did load gud.");
// need a list of words 
  const wordBank = ['pantaloons', 'knickers', 'bottoms', 'slacks', 'jeans', 'culottes', 'overalls', 'shorts', 'leggings', 'jeggings', 'cargo', 'britches', 'trousers', 'burmudas', 'bloomers', 'underpants', 'chaps', 'longjohns', 'corduroys', 'denims', 'drawers', 'dungarees', 'jodhpurs', 'boxers', 'capri', 'smarty', 'sassy'];
// need to have an alphabet array 
	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	//variables for DOM elem
	const word = document.getElementById('word');
	const alpha = document.getElementById('alphabet');

  function play(){
    console.log("play function called");

    let userGuess;
  	let misses = [];//will need to know how many bad guesses = a loss. 3
    console.log(misses);
  	//get a random number to be an index
    const randoWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
    //the actual word and the matching array of dashes. these need to match:
    let randoWordArr = randoWord.split('');
    let dashesHTML = [];
    console.log(` Random word array is ${randoWordArr}`);
    //convert the random word into dashes and put them into the dom
    for(let l = 0; l < randoWordArr.length; l++){
      console.log(`${l+1} letter is ${randoWordArr[l]}`);
      dashesHTML.push(`<span id="${l}"> _ </span>`);
    }
    console.log(dashesHTML);
    word.innerHTML = dashesHTML;

    //dealing with getting the user's choice
    document.onkeyup = function(e) {
      // Determines which key was pressed.
      userGuess = e.key;
      console.log(`userGuess is ${userGuess}`);

      //playing the game:
      //check if user choice is valid
        //if not valid, tell them to do it again
        //if it is valid, check if it's in the word
            //if it is not, push letter to bad guesses array
            //show a body part
            //when all body parts shown and exhibition hangman is deddernded, user loses.
            //if it is, replace dash with letter
      if(alphabet.indexOf(userGuess) < 0){
        alert('That is not a letter. Please choose a letter.');
      }
      else{
        if(randoWordArr.indexOf(userGuess) < 0){
          misses.push(userGuess);
        }
        console.log(misses);
      }
      for(var i = 0; i < misses.length; i++){
      var bodyPartSeen = document.getElementById(`body-${i+1}`);
      bodyPartSeen.style.opacity = "1";
    }
    }
    

  	

  	

	

  	//make buttons for each letter of the alphabet
  	let alphaHTML = [];
  	for(let a = 0; a < alphabet.length; a++){
  		alphaHTML.push(`<div class="alphaBtn" id="${alphabet[a].toLowerCase()}">${alphabet[a]}</div>`);
  	}
  	console.log(alphaHTML);
  	alpha.innerHTML = alphaHTML;
  }
  
//get the random word, for each letter, there's a dash or underline. display underlines
//check indexOf word against letter guessed.
//swap out dash for correct letter
//incorrect guesses get posted and a body part appears. 


play();


});

// PSEUDOCODE


// need to make spaces/dashes for that word

// need to get user's guess for a letter (prompt, input, or button?)
// need to check user's guess against the randomword
// 	if it's correct, letter appears in place of the dash
// 	if it is incorrect, a body part is shown (so many jokes here) AND letter guessed is put into an incorrect box

// ?store guessed letters in another array and remove them from alpha?
// store incorrect guesses in an array. number of letters = number of parts shown?

// announce win or loss
// offer to play again