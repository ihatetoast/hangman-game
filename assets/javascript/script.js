//load first. not nec here, but taking no chances with SVGs
document.addEventListener("DOMContentLoaded", function(e) { 
  alert('Press any key to start.');

  //VARIABLES FOR DOM ELEMENTS: OK TO BE GLOBAL...i think.
  const alpha = document.getElementById('alphabet');//for the chalkboard letters
  const dashesHTML = document.getElementById('word'); //for the dashes
  const messages = document.getElementById('messages'); //for messages to user
  // const themes = document.querySelectorAll('.theme');

  //HELPERS: OK TO BE GLOBAL
  const regExLetters = /^[a-z]+$/i;

  //SET UP CHALKBOARD: 
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   let alphaHTML = [];
  //ON LOADING, WRITE LETTERS ON CHALKBOARD
  for(let a = 0; a < alphabet.length; a++){
    alphaHTML.push(`<div class="alphaBtn" id="${alphabet[a]}">${alphabet[a]}</div>`);
  }
  alpha.innerHTML = alphaHTML.join(''); 

  //ME VARS OF ARRS
    //have user choose theme ... eventually
    //TAS! I WANT TO HAVE THE BUTTONS WORKING WHERE I CHOOSE A THEME. I'VE TRIED. IF I DON'T GET IT DONE, WILL YOU HELP?
  //I'M LEAVING MY THEME ATTEMPTS IN, BUT COMMENTED OUT.
  //I'm thinking this would be good as an obj with a this.wordBank: rodens inside a method, but i'm too far gone to start over and while i've had a lot of algorithm experience with JS, i suck at OOP and therefore fear all objects, even outside of OOP.
    const rodents = ['chipmunk', 'marmot', 'woodchuck', 'squirrel', 'gopher', 'mice', 'rat', 'gerbil', 'hamster', 'lemming', 'mouse', 'vole', 'porcupine', 'capybara', 'agouti', 'cavy', 'chinchilla', 'dormouse', 'octodon', 'nutria', 'tucotuco', 'muskrat'];
    const pants = ['pantaloons', 'knickers', 'bottoms', 'slacks', 'jeans', 'culottes', 'overalls', 'shorts', 'leggings', 'jeggings', 'cargo', 'britches', 'trousers', 'burmudas', 'bloomers', 'underpants', 'chaps', 'longjohns', 'corduroys', 'denims', 'drawers', 'dungarees', 'jodhpurs', 'boxers', 'capri', 'smarty', 'sassy'];
    const code = ['javascript', 'react', 'angular', 'vue', 'elixir', 'ruby', 'rails', 'node', 'ember', 'java', 'python', 'laravel', 'php', 'coffeescript', 'pseudo', 'fortran', 'julia', 'bash', 'zsh', 'cobol', 'erlang', 'clojure', 'ecma', 'typescrips', 'express', 'swift', 'sql', 'scratch', 'net', 'elm', 'lisp', 'basic', 'github', 'git', 'function', 'array', 'object', 'variable', 'primative', 'boolean', 'string', 'conditionals', 'loop', 'number', 'event', 'dom', 'html', 'css', 'sass', 'less', 'compile'];
    //DECLARE VAR HERE. ASSIGN IN FCNS.
    let wordBank;

 
  // TWO FUNCTIONS: PLAY AND CHECK LETTERS.
  // PLAY STARTS GAME. VARIABLES START AT 0 OR EMPTY ARRAYS 
  // CHECK LETTERS DEALS WITH USER INPUT. 


 //ME VARS
  let misses = [];//will need to know how many bad guesses = a loss. 6
  let hits = [];
  let wrongGuesses = 0;
  let userGuess;
  let randoWordArr;
  let wordArrDashes;

//PLAY GAME
    //DONKEY UP: FIRE PLAYGAME()
    document.onkeyup = function(e){
      playGame();
      checkUserInput();
    }
  
  function playGame(){
    console.log("play game is fired.");
    wordBank = pants;// need a list of words 
    const randoWord = wordBank[ Math.floor(Math.random() * wordBank.length) ];
    randoWordArr = randoWord.split('');
    wordArrDashes = randoWordArr.map(ltr => ' _ ');
    console.log(`randoWord is ${randoWord}`);
    dashesHTML.textContent = wordArrDashes.join(' ');
    messages.textContent = "";
  //themes.forEach(theme => theme.addEventListener('click', getTheme));
  } //END OF PLAY GAME FCN

  function checkUserInput(){
    console.log("check user input has fired.");
    document.onkeyup = function(e) {
      userGuess = e.key; 
      //validate: is choice a ltr?
      if(regExLetters.test(userGuess) === false){
        alert('That is not a letter. Please choose a letter.');
      }
      //if valid ..
      else{
        //if not in the word ...
        if(randoWordArr.indexOf(userGuess) === -1){
          console.log(`${userGuess} is NOT in the word.`);
          handleMisses(userGuess);
          //if in the word
        } 
        else {
          console.log(`${userGuess} IS in the word.`);
          handleHits(userGuess);
          //for when the letter is in the rando word array:           
        }
      }
    } 

  } // END OF CHECK USER'S INPUT FCN


  //     
     // THIS FUNCTION HANDLES CORRECT GUESSES
      function handleHits(guess){
        if(misses.indexOf(guess) > -1 || hits.indexOf(guess)> -1){
          alert("you've guessed that letter already. Try again.");
        } 
        else {
          hits.push(guess);
          randoWordArr.forEach((ltr, idx) => {
            if(userGuess === ltr){
              wordArrDashes[idx] = ` ${ltr} `;
              dashesHTML.innerHTML = wordArrDashes.join('');
              checkWin();
            }
          });
          for(let i = 0; i < hits.length; i++){
            let letter = document.getElementById(`${hits[i]}`);
            letter.style.color = "rgba(234, 230, 229, 0.2)";
          }
        }
      }
// THIS FUNCTION HANDLES BAD GUESSES:
      function handleMisses(guess){
        if(misses.indexOf(guess) > -1 || hits.indexOf(guess) > -1){
          alert("you've guessed that letter already. Try again.");
        } else {
          misses.push(guess);
          for(let i = 0; i < misses.length; i++){
            let bodyPartSeen = document.getElementById(`body-${i+1}`);
            bodyPartSeen.style.opacity = "1";
            let letter = document.getElementById(`${misses[i]}`);
            letter.style.color = "rgba(236, 11, 67, 1)";
          }
          wrongGuesses += 1;
          console.log(wrongGuesses);
          checkLoss();
        }
      }
      function checkWin(){
        if(wordArrDashes.indexOf(' _ ') === -1){
          messages.textContent = "You won, hun bun!";
          reset("Confident enough to try again?");
        } else {
          return;
        }
      }
      function checkLoss(){
        if(wrongGuesses >= 6){
          const deadFace = document.getElementById('body-7');
          deadFace.style.opacity = "1";
          messages.textContent = "Toodle-loos. You lose";
          reset("Really? You're battling me again?")
        } else {
          return;
        }
      }

      function reset(message){
        hits = [];
        misses = [];
        wrongGuesses = 0;
        messages.textContent = message;
        setTimeout(()=>{
          playGame();
        }, 2000);
       
      }
      
   
}); //this is the end of doc load fcn. do not delete!




//THIS FUNCTION CHOOSES THE THEME
  //TRYING TO ASSIGN THEME BY USING DATASETS AND I'M JUST GETTING THE SHITS!
  //node list is array-ish. loop over and add evt listener
    //listen for click on button
    // function getTheme(e){
    //   console.log(this.dataset.theme);
    //   wordBank = this.dataset.theme;
    //   console.log(wordBank);
    // }
  
    // //node list is array-ish. loop over and add evt listener
    // //listen for click on button
    // function getTheme(e){
    //   console.log(this.dataset.theme);
    //   wordBank = this.dataset.theme;
    // }





//NOTES TO TAS:
//I started this when it was mentioned. Will try to retrofit specific instructions.
// Watch the demo.

// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative! DONE

// Use key events to listen for the letters that your players will type. DONE

// Display the following on the page:

// Press any key to get started! STUCK

// Wins: (# of times user guessed the word correctly).

// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _. DONE

// As the user guesses the correct letters, reveal them: m a d o _ _ a. DONE

// Number of Guesses Remaining: (# of guesses remaining for the user). 
//I OPTED TO SHOW THE HANGMAN INSTEAD. DONE

// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).DONE

// After the user wins/loses the game should automatically choose another word and make the user play it.STUCK

// Hangman Game Bonuses

// Play a sound or song when the user guesses their word correctly, like in our demo.
// Write some stylish CSS rules to make a design that fits your game's theme. DONE

// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.
// Remember: global variables, then objects, then calls.
// Definitely talk with a TA or your instructor if you get tripped up during this challenge.

//
// MY ORIGINAL PSEUDOCODE:
// (it's been cut/copy/pasted/repasted, so out of order but these are my notes I started with)
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


// define random word globally but set in the fcns that use it.
// have play fcn assign random word, fill dom elems with dashes and whatnot
// have play fcn be where scores are set at 0 and arrays are empty.

// sep fcn for checking letter. that'll be where i do donkey up and 
// checking for good/bad letters.