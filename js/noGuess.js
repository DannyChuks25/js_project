  const hidden = 64;
  let score = 25;
  let attempts = 0;
  let maxAttempts = 5;
  let highestScore = 0;

  const form = document.getElementById('game-form');
  const input = document.getElementById('input-number');
  const feedback = document.getElementById('feedback');
  const scoreDisplay = document.getElementById('score-display');
  const highScoreDisplay = document.getElementById('high-score-display');
  const replayBtn = document.getElementById('replay');
  const submit = document.getElementById("submit");
  const scoreCtn = document.getElementById("scoreCtn");

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let guess = parseInt(input.value);
    attempts++;
    score -= 5;
    if(isNaN(guess)){
      feedback.textContent = "Not a Number!";
      feedback.style.color = "red";
    }
    else if (guess < 0) {
      feedback.textContent = "Your number cannot be less than 0.";
      feedback.style.color = "red";
      
    }
    
    else if (guess < 64 && guess > 50) {
      feedback.textContent = "Incorrect! Too low. Try again.";
      feedback.style.color = "red";
      
    }
    else if (guess > 64 && guess < 70) {
      feedback.textContent = "Incorrect! Too high. Try again.";
      feedback.style.color = "red";
      
    }
    else if (guess === hidden) {
      feedback.textContent = "Correct! You won with a score of " + score + ".";
      feedback.style.color = "green";
      //scoreCtn.style.display = "block";
      //highScoreDisplay.style.display = "block";
      scoreDisplay.textContent = "Score: " + score;
      scoreCtn.classList.remove("hidden");
      if (score > highestScore) highestScore = score;
      highScoreDisplay.textContent = "Highest Score: " + highestScore;
      replayBtn.style.display = "block";

      input.disabled = true;
      submit.disabled = true;
    }
    else {
      feedback.textContent = "Your number must be between 50 and 70.";
      feedback.style.color = "red";
      
    }
    
    //scoreCtn.classList.remove("hidden");
    //scoreCtn.style.display = "block";
    //scoreDisplay.textContent = "Score: " + score;

    if (attempts >= maxAttempts && guess !== hidden) {
      feedback.textContent = "Game over! The hidden number was " + hidden + ". Your score is 0.";
      
      score = 0;
      scoreCtn.classList.remove("hidden");
      scoreDisplay.textContent = "Score: 0";
      if (score > highestScore) highestScore = score;
      highScoreDisplay.textContent = "Highest Score: " + highestScore;
      replayBtn.style.display = "block";

      input.disabled = true;
    }
    input.value = '';
  });

  
  replayBtn.addEventListener('click', function () {
    score = 25;
    attempts = 0;
    
    feedback.textContent = '';
    replayBtn.style.display = "none";
    input.value = '';
    input.disabled = false; 
    submit.disabled = false;
    highScoreDisplay.style.display = "none";
  });
