//Random number generator
//Generates a random number between 0 and 9999
const gen = document.getElementById('gen');
const countLabel = document.getElementById('countLabel');

let randomNum = Math.floor(Math.random() * 9999);

console.log(randomNum); 

gen.onclick = function(){
    randomNum = Math.floor(Math.random() * 9999);
    countLabel.textContent = randomNum;
}
reset.onclick = function(){
    countLabel.textContent = 0;
}