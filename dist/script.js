//load first. not nec here, but taking no chances with SVGs
document.addEventListener('DOMContentLoaded', function(e) {
    // alert('Press any key to start.'); <--is giving me the irits
  
    //VARIABLES FOR DOM ELEMENTS: OK TO BE GLOBAL...i think.
    const alpha = document.getElementById('alphabet'); //for the chalkboard letters
    const dashesHTML = document.getElementById('word'); //for the dashes
    const messages = document.getElementById('messages'); //for messages to user
    const winsTally = document.getElementById('winsTally'); // for showing the wins
  
    let bodyPartSeen;
    let letter;
  
    //HELPERS: OK TO BE GLOBAL
    // const regExLetters = /^[a-z]+$/i;
  
    //SET UP CHALKBOARD:
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
  
    let alphaHTML = [];
    //ON LOADING, WRITE LETTERS ON CHALKBOARD
    for (let a = 0; a < alphabet.length; a++) {
      alphaHTML.push(
        `<div class="alphaBtn" id="${alphabet[a]}">${alphabet[a]}</div>`
      );
    }
    alpha.innerHTML = alphaHTML.join('');
  
    //ME VARS OF ARRS
  
    const pants = [
      'pantaloons',
      'knickers',
      'bottoms',
      'slacks',
      'jeans',
      'culottes',
      'overalls',
      'shorts',
      'leggings',
      'jeggings',
      'cargo',
      'britches',
      'trousers',
      'burmudas',
      'bloomers',
      'underpants',
      'chaps',
      'longjohns',
      'corduroys',
      'denims',
      'drawers',
      'dungarees',
      'jodhpurs',
      'boxers',
      'capri',
      'smarty pants',
      'sassy pants'
    ];
  
    //messages arrays:
    const lossArr = [
      "Really? You're battling me again?",
      "It's cute when you try.",
      "You're the reason the stick-figure population has plummeted."
    ];
    const winArr = [
      'Confident enough to try again?',
      'You were lucky.',
      "Whoo hoo hoo. Don't you think you're special?"
    ];
    const goodGuess = [
      'Noice.',
      'Got lucky.',
      "Ooh, aren't you a clever one?",
      'I was going to suggest that.',
      'Are you cheating?',
      'Whoo hoo!',
      'Read my mind!',
      'You deserve a cookie!'
    ];
    const badGuess = [
      'Really?',
      'Not that letter.',
      'Wrong!',
      'Nerp',
      'Aaaah. No.',
      'No way!',
      "I'll never hang!"
    ];
  
    // TWO FUNCTIONS: PLAY AND CHECK LETTERS.
    // PLAY STARTS GAME. VARIABLES START AT 0 OR EMPTY ARRAYS
    // CHECK LETTERS DEALS WITH USER INPUT.
  
    //ME VARS
    let misses = []; //will need to know how many bad guesses = a loss. 6
    let hits = [];
    let wins = 0;
    let losses = 0;
    let wrongGuesses = 0;
    let userGuess;
    let randoWordArr;
    let wordArrDashes;
  
    //PLAY GAME
    //DONKEY UP: FIRE PLAYGAME()
    document.onkeyup = function(e) {
      playGame();
      checkUserInput();
    };
    //MAKE BLANKS AND DEAL WITH HYPHENS, SPACES, AND 'S
    function makeBlanks(str) {
      const strArr = str.split('');
      wordArrDashes = strArr.map(char => {
        if (/^[a-z]+$/i.test(char) === false) {
          return char;
        } else {
          return '_';
        }
      });
  
      dashesHTML.textContent = wordArrDashes.join(' ');
    }
    function playGame() {
      // let wins = 0;
      wordBank = pants; // need a list of words
      const randoWord = getRando(wordBank);
      randoWordArr = randoWord.split('');
  
      makeBlanks(randoWord);
      messages.textContent = 'Type a letter.';
      //themes.forEach(theme => theme.addEventListener('click', getTheme));
    } //END OF PLAY GAME FCN
  
    function checkUserInput() {
      document.onkeyup = function(e) {
        const regExLetters = /^[a-z]+$/i;
        userGuess = e.key.toLowerCase();
        //validate: is choice a ltr?
        if (regExLetters.test(userGuess) === false) {
          messages.textContent = 'That is not a letter. Please choose a letter.';
        }
        //if already done:
        else if (misses.indexOf(userGuess) > -1 || hits.indexOf(userGuess) > -1) {
          messages.textContent = "You've guessed that letter already. Try again.";
        }
        //if valid ..
        else {
          //if not in the word ...
          if (randoWordArr.indexOf(userGuess) === -1) {
            handleMisses(userGuess);
          } else {
            handleHits(userGuess);
          }
        }
      };
    } // END OF CHECK USER'S INPUT FCN
  
    // I need to get random words/phrases 3 times, so trying to DRY out with this:
    function getRando(arr) {
      const rando = arr[Math.floor(Math.random() * arr.length)];
      return rando;
    }
  
    // THIS FUNCTION HANDLES CORRECT GUESSES
    function handleHits(guess) {
      const audio = document.querySelector(`audio[data-name="teehee"]`);
      audio.play();
      hits.push(guess);
      randoWordArr.forEach((ltr, idx) => {
        if (userGuess === ltr) {
          wordArrDashes[idx] = ` ${ltr} `;
          dashesHTML.innerHTML = wordArrDashes.join('');
          checkWin();
        }
      });
      messages.textContent = getRando(goodGuess);
      for (let i = 0; i < hits.length; i++) {
        letter = document.getElementById(`${hits[i]}`);
        letter.style.color = 'rgba(234, 230, 229, 0.2)';
      }
    }
    // THIS FUNCTION HANDLES BAD GUESSES:
    function handleMisses(guess) {
      const audio = document.querySelector(`audio[data-name="doooh"]`);
      audio.play();
      misses.push(guess);
      for (let i = 0; i < misses.length; i++) {
        bodyPartSeen = document.getElementById(`body-${i + 1}`);
        bodyPartSeen.style.opacity = '1';
        letter = document.getElementById(`${misses[i]}`);
        letter.style.color = 'rgba(236, 11, 67, 1)';
      }
      messages.textContent = getRando(badGuess);
      wrongGuesses += 1;
      checkLoss();
    }
    //keep trak of wins
  
    function checkWin() {
      if (wordArrDashes.indexOf('_') === -1) {
        messages.textContent = `You won, hun bun. (${wins} times)`;
        wins++;
        setTimeout(() => {
          reset(winArr);
        }, 1500);
      } else {
        return;
      }
    }
    function checkLoss() {
      if (wrongGuesses >= 6) {
        const deadFace = document.getElementById('body-7');
        deadFace.style.opacity = '1';
        messages.textContent = 'Toodle-loos. You lose';
        setTimeout(() => {
          reset(lossArr);
        }, 1500);
      } else {
        return;
      }
    }
    function reset(array) {
      hits = [];
      misses = [];
      wrongGuesses = 0;
      messages.textContent = getRando(array);
      winsTally.textContent = wins;
      //pause before changing letters back and playing game over.
      setTimeout(() => {
        for (let i = 0; i < 7; i++) {
          bodyPartSeen = document.getElementById(`body-${i + 1}`);
          bodyPartSeen.style.opacity = '0';
        }
        for (let i = 0; i < alphabet.length; i++) {
          letter = document.getElementById(`${alphabet[i]}`);
          letter.style.color = 'rgba(234, 230, 229, 1)';
        }
        playGame();
      }, 2000);
    }
  
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }); //this is the end of doc load fcn. do not delete!
  