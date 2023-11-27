let timer;
let isRunning = false;
let initialDuration = 70 * 60; // New variable to store the initial duration value
let duration = initialDuration;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  stopTimer();
  duration = initialDuration; // Reset the duration to its initial value
  updateTimerDisplay();
}

function setDuration() {
  const inputMinutes = parseInt(prompt("Enter the countdown minutes:"), 10);
  if (!isNaN(inputMinutes) && inputMinutes > 0) {
    initialDuration = inputMinutes * 60; // Update initial duration
    duration = initialDuration; // Reset duration to the new initial value
    updateTimerDisplay();
  } else {
    alert("Please enter a valid positive number for minutes.");
  }
}

function updateTimer() {
  if (duration > 0) {
    duration--;
    updateTimerDisplay();
  } else {
    stopTimer();
    alert("Countdown complete!");
  }
}

function updateTimerDisplay() {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

// Initialize timer display with initial value
updateTimerDisplay();
