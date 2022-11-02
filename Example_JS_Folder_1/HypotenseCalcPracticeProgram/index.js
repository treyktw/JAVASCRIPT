let a;
let b;
let c;


// easy way //
/*
a = window.prompt("enter side a");
a = Number(a);

b = window.prompt("enter side b");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c) 

or // c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)) 

console.log("Side C: ", c);
*/

// Hard way using html text boxes // 

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextbox").value;
    a = Number(a);

    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c) 


    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}