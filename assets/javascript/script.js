document.addEventListener("DOMContentLoaded", function(e) { 
  console.log("if you see me, you dun did load gud.");

  const wordBank = ['PANTALOONS', 'KNICKERS', 'BOTTOMS', 'SLACKS', 'JEANS', 'CULOTTES', 'OVERALLS', 'SHORTS', 'LEGGINGS', 'JEGGINS', 'CARGO', 'FLAIR', 'BELL BOTTOMS', 'BRITCHES', 'TROUSERS', 'BURMUDAS', 'BLOOMERS', 'UNDERPANTS', 'CHAPS', 'CORDS', 'CORDUROYS', 'DENIMS', 'DRAWERS', 'DUNGAREES', 'JODHPURS', 'BOXERS', 'CLAM DIGGERS', 'PEDAL PUSHERS', 'CAPRI', 'SMARTY', 'SASSY', 'BIG GIRL', 'BIG BOY'];

	const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	let misses = [];//will need to know how many bad guesses = a loss. 


  const randomWord = () => wordBank[Math.floor( Math.random()*wordBank.length) - 1 ];
  console.log(`Random word is ${randomWord()}`);
  
//get the random word, for each letter, there's a dash or underline. display underlines
//check indexOf word against letter guessed.
//swap out dash for correct letter
//incorrect guesses get posted and a body part appears. 






});

// PSEUDOCODE
// need a list of words DONE
// need to grab one of those words at random DONE
// 	and need to store that word. DONE
// need to have an alphabet array DONE

// need to make spaces/dashes for that word

// need to get user's guess for a letter (prompt, input, or button?)
// need to check user's guess against the randomword
// 	if it's correct, letter appears in place of the dash
// 	if it is incorrect, a body part is shown (so many jokes here) AND letter guessed is put into an incorrect box

// ?store guessed letters in another array and remove them from alpha?
// store incorrect guesses in an array. number of letters = number of parts shown?

// announce win or loss
// offer to play again