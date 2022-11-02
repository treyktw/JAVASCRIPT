// How to accept user input



// Easy way with a window prompt

//let username = window.prompt("Whats Your Name");
//console.log(username);

// difficult way using html textbook
let username;

document.getElementById("myButton").onclick= function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "Hello " + username;
}