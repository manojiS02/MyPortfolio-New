

let colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", '#FFBABA', "#FF5252", "#FF0000", "#A70000"];
let colors2 = [ "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF","#FFFFFF" , '#A70000', "#FF0000", "#FF5252", "#FFBABA"];
let section = document.querySelector("section");
let divArray = section.getElementsByTagName("div");
let count = 0;
let reverse = true;
let interval;
$(document).ready(function () {
    clearInterval(interval);
    Rider();
    $("#start.btn").click(function () {
        clearInterval(interval);
        Rider();
    });
});
function Rider() {
    interval = setInterval(function () {
        if (reverse) {
            for (let i = 0; i < divArray.length; i++) {
                divArray[i].style.backgroundColor = colors[i];
            }
            let lastValue = colors.pop();
            colors.unshift(lastValue);
            count++;
            if (count == 12) {
                reverse = false;
            }
        } if (reverse == false) {
            let lastColor = colors2.shift();
            colors2.push(lastColor);
            for (let i = 0; i < divArray.length; i++) {
                divArray[i].style.backgroundColor = colors2[i];
            }
            count--;
            if (count == 1) {
                reverse = true;
            }
        }
    }, 100);
}


document.querySelector("#stop-btn").addEventListener('click', function () {
    clearInterval(interval);
});
document.querySelector("#start-btn").addEventListener('click', function () {
    Rider();
});





const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const knightRiderDivs = document.querySelectorAll('.knight-rider');

let isPlaying = false;

startBtn.addEventListener('click', () => {
  if (!isPlaying) {
    knightRiderDivs.forEach(div => div.classList.add('active')); // Start animation
    isPlaying = true;
    // You can also play the audio here if desired:
    const audio = document.getElementById('audio');
    audio.play();
  }
});

stopBtn.addEventListener('click', () => {
  if (isPlaying) {
    knightRiderDivs.forEach(div => div.classList.remove('active')); // Stop animation
    isPlaying = false;
    // You can also pause the audio here if desired:
    const audio = document.getElementById('audio');
    audio.pause();
  }
});
