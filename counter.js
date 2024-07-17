// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0; 

increaseBtn.onclick = function(){
    count++;
    countLabel.innerHTML = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.innerHTML = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.innerHTML = count;
}
// Number Generator 
const min = 1000; 
const max = 8999;

let randomNum = Math.floor(Math.random() * max) + min;
let generate = 0;

const generateLabel = document.getElementById("generateLabel");
const generateBtn = document.getElementById("generateBtn");
const resetBtn2 = document.getElementById("resetBtn2");

generateBtn.onclick = function(){
    generateLabel.innerHTML = randomNum;
}

resetBtn2.onclick = function() {
    generateLabel.innerHTML = '0000';
}