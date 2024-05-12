/* Easy way
let username;
username = window.prompt("What's your username");

console.log(username);
*/

//Profesional way = HTMl textbox
let age;
let hasLicense = true;

document.getElementById("myButton").onclick = function(){
    age = document.getElementById("myText").value;
    if (age >= 18 ) {
        console.log("You are old enough to drive");
        document.getElementById("myH2").textContent = "You are old enough to drive";
        if (hasLicense) {
            console.log("You can drive");
            document.getElementById("myH3").textContent = "You can drive";
        }
    } 
    else{
        console.log("You are not old enough to drive");
        document.getElementById("myH2").textContent = "You are not old enought to drive";
        document.getElementById("myH3").textContent = "";
    }
}
//Here we have an if inside of another if, first we check if the person is 18 or older, if it is
 //then we check if they have a license, if they do he can drive, if he doesn't he can't drive
 //if he is under 18 he can't drive