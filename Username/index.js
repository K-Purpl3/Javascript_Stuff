/* Easy way
let username;
username = window.prompt("What's your username");

console.log(username);
*/

//Profesional way = HTMl textbox

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = "Hej! " + username;
    document.getElementById("myH2").textContent = "Your username is " + username;
}