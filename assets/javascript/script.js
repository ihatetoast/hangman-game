//load first. not nec here, but taking no chances with SVGs
document.addEventListener("DOMContentLoaded", function(e) { 
  // need a list of words 
  const wordBank = ['pantaloons', 'knickers', 'bottoms', 'slacks', 'jeans', 'culottes', 'overalls', 'shorts', 'leggings', 'jeggings', 'cargo', 'britches', 'trousers', 'burmudas', 'bloomers', 'underpants', 'chaps', 'longjohns', 'corduroys', 'denims', 'drawers', 'dungarees', 'jodhpurs', 'boxers', 'capri', 'smarty', 'sassy'];

	const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	//variables for DOM elem
	const alpha = document.getElementById('alphabet');

  let misses = [];//will need to know how many bad guesses = a loss. 6
  let hits = [];
  let userGuess;
  const regExLetters = /^[a-z]+$/i;

  function handleHits(guess){
    if(misses.indexOf(guess) > -1 || hits.indexOf(guess)> -1){
      alert("you've guessed that letter already. Try again.");
    } 
    else {
      hits.push(guess);
      randoWordArr.forEach((ltr, idx) => {
        if(userGuess === ltr){
          wordArrDashes[idx] = ` ${ltr} `;
          dashesHTML.innerHTML = wordArrDashes;
        }
      });
    }
    console.log(hits);
  }

  function handleMisses(guess){
    if(misses.indexOf(guess) > -1 || hits.indexOf(guess)> -1){
      alert("you've guessed that letter already. Try again.");
    }else {
      misses.push(guess);
      for(let i = 0; i < misses.length; i++){
            let bodyPartSeen = document.getElementById(`body-${i+1}`);
              bodyPartSeen.style.opacity = "1";
      }
    }
    console.log(misses);
  }

  function checkLoss(){
    if(misses.length >6){
      alert("you lost");
    }else{
      return
    }
  }

  // function play(){
    const randoWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
    console.log(randoWord);
    let randoWordArr = randoWord.split('');
    let wordArrDashes = randoWordArr.map(ltr => ' _ ');
    let dashesHTML = document.getElementById('word');
    dashesHTML.innerHTML = wordArrDashes;

    //dealing with getting the user's choice
    document.onkeyup = function(e) {
      userGuess = e.key; 

      if(regExLetters.test(userGuess) === false){
        alert('That is not a letter. Please choose a letter.');
      }
      //if valid ..
      else{
        //if not in the word ...
        if(randoWordArr.indexOf(userGuess) === -1){
          handleMisses(userGuess);
          console.log(misses);
        //if in the word
        }
        else {
          handleHits(userGuess);
          //for when the letter is in the rando word array:
             
        }
      }
      console.log(`hits: ${hits.length} and misses: ${misses.length}`);

     
      // function checkWin(){
        if(hits.length === randoWord.length){
          alert("You won!");
        }else if(misses.length === 6){
          alert("you lost");
        }
      // }

    }

    //functions to check for win /loss

  	//make buttons for each letter of the alphabet
    let alphaHTML = [];
    for(let a = 0; a < alphabet.length; a++){
    	alphaHTML.push(`<div class="alphaBtn" id="${alphabet[a]}">${alphabet[a]}</div>`);
    }
    console.log(alphaHTML[0]);
    alpha.innerHTML = alphaHTML;
  // }
  


// play();


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
// validate for letter vs other key
// check to see if letter's been guessed
// announce win or loss
// offer to play again