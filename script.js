let timerInterval;
let totalSeconds = 0;

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('startButton').disabled = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('startButton').disabled = false;
}

function resetTimer() {
  stopTimer();
  totalSeconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  totalSeconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  document.getElementById('timer').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
