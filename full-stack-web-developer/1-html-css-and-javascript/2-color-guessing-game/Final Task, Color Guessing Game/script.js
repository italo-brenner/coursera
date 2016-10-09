color = ['red', 'blue', 'green', 'yellow', 'gray'];
random_color = '';
guesses = 0;
guess_color = ''

function do_game() {
  guesses = 0;
  color = color.sort();
  var random_number = Math.random();
  var random_index = Math.floor(Math.random() * (color.length - 1));
  random_color = color[random_index];
  var finished = false;
  while ( ! finished ) {
    guess_color = prompt('I am thinking of one of these colors:\n\n' +
                             color.join(', ') +
                             '\n\nWhat color am I thinking of?');
    finished = check_guess();
    guesses++;
  }
  var myBody = document.getElementsByTagName('body')[0];
  myBody.style.background = guess_color;
}

function check_guess() {
  console.log(guess_color.indexOf(guess_color));
  if ( guess_color.indexOf(guess_color) == -1 ) {
    alert('Sorry, I don\'t recognize your color.\n\nPlease try again.');
    return false;
  } else if (guess_color > random_color) {
    alert('Sorry, your guess is not correct!\n\n' +
          'Hint: your color is alphabetically higher than mine.\n\n' +
          'Please try again.');
    return false;
  } else if (guess_color < random_color) {
    alert('Sorry, your guess is not correct!\n\n' +
          'Hint: your color is alphabetically lower than mine.\n\n' +
          'Please try again.');
    return false;
  } else if (guess_color === random_color) {
    alert('Congratulation! You have guessed the color.\n\n' +
          'It took you ' + guesses + ' guesses to finish the game!\n\n' +
          'You can see the colour in the background.');
    return true;
  }
}
