const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 19000; // 19s
let breatheTime = totalTime - 15000; // 4s
let holdTime = totalTime - 12000; // 7s

document.getElementById("text-button").onclick = function() {
  breatheAnimation();
  const buttonContainer = document.querySelector('#text-button');
  buttonContainer.style.display = "none";
  setInterval(breatheAnimation, totalTime);
};

function breatheAnimation() {
  const buttonContainer = document.querySelector('#text-button');
  buttonContainer.style.display = "none";
  text.innerHTML = "ブロッ";
  container.className = "container grow";
  setTimeout(() => {
    text.innerHTML = "コ";

    setTimeout(() => {
      text.innerHTML = "リー！！！";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}
