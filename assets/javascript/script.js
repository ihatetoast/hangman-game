document.addEventListener("DOMContentLoaded", function(e) { 
  console.log("if you see me, you dun did load gud.");
// need a list of words DONE
  const wordBank = ['PANTALOONS', 'KNICKERS', 'BOTTOMS', 'SLACKS', 'JEANS', 'CULOTTES', 'OVERALLS', 'SHORTS', 'LEGGINGS', 'JEGGINGS', 'CARGO', 'FLAIR', 'BELL-BOTTOMS', 'BRITCHES', 'TROUSERS', 'BURMUDAS', 'BLOOMERS', 'UNDERPANTS', 'CHAPS', 'CORDS', 'CORDUROYS', 'DENIMS', 'DRAWERS', 'DUNGAREES', 'JODHPURS', 'BOXERS', 'CLAM-DIGGERS', 'PEDAL-PUSHERS', 'CAPRI', 'SMARTY', 'SASSY', 'BIG-GIRL', 'BIG-BOY'];

// need to have an alphabet array DONE
	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	//variables for DOM elem
	const word = document.getElementById('word');
	const alpha = document.getElementById('alphabet');

  function play(){
  	let misses = [];//will need to know how many bad guesses = a loss. 

  	console.log("play function called");
  	//get a random number to be an index

  	const randoWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];

  	//the actual word and the matching array of dashes. these need to match:
  	let randoWordArr = randoWord.split('');
  	let dashesHTML = [];

  	console.log(` Random word array is ${randoWordArr}`);

  	//convert the random word into dashes and put them into the dom
  	for(let l = 0; l < randoWordArr.length; l++){
  		console.log(`${l+1} letter is ${randoWordArr[l]}`);
  		dashesHTML.push(`<span id="${l}"> - </span>`);
  	}
  	console.log(dashesHTML);
  	word.innerHTML = dashesHTML;


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