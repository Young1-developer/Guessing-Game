
    var subTitle = document.getElementById('sub-title');
    var btn = document.getElementById('btn');
    var output = document.getElementById('output');
    var demo = document.getElementById('demo');
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    btn.addEventListener('click', function() {
      const numberOfGuesses = 3;
      let remainingGuesses = numberOfGuesses;

      while (remainingGuesses > 0) {
        let userGuess = parseInt(document.getElementById('Guess').value);

        if (userGuess >= 1 && userGuess <= 10) {
          if (userGuess === randomNumber) {
            output.textContent = `Computer guess ${randomNumber}: \n You also guess ${userGuess}: \n\n You Win!!`;
           
            break;
          } else if (userGuess < randomNumber) {
            demo.textContent = 'The number you guessed is too low';
          
          } else if (userGuess > randomNumber) {
            demo.textContent = 'The number you guessed is too high';
         
          }
        } else {
          subTitle.textContent = `Invalid input given. Choose from (1 - 10): `;
          ;
        }
        remainingGuesses--;
      }

      if (remainingGuesses === 0) {
        output.textContent = `Computer guess ${randomNumber}: \n You Lose!!`;
       
      }
    });
  




