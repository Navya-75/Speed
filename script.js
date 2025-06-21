let startTime;

function startTest() {
  const input = document.getElementById('input');
  const result = document.getElementById('result');
  const sentence = document.getElementById('sentence').textContent;

  input.value = '';
  input.focus();
  startTime = new Date().getTime();

  input.oninput = function () {
    if (input.value === sentence) {
      let endTime = new Date().getTime();
      let timeTaken = (endTime - startTime) / 1000;
      let speed = Math.round((sentence.split(" ").length / timeTaken) * 60);
      result.textContent = `⏱️ Time: ${timeTaken.toFixed(2)}s | 💬 Speed: ${speed} WPM`;
      input.oninput = null; // stop further input check
    }
  };
}
