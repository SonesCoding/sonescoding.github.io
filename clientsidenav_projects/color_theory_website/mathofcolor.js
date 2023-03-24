"use strict";

const MIN = 2;
const MAX = 15;

      //warningBox = document.getElementById("warningBox");
     // result = document.getElementById("result");

document.getElementById("submit").addEventListener("click", message);


let nickname = document.getElementById("NickN");
let selectElement = document.querySelector('#select1');

let r = document.getElementById("r").value; 
let b = document.getElementById("b").value; 
let g = document.getElementById("g").value;
   
let cr = 255 - r;
let cb = 255 - b;
let cg = 255 - g;


submitButton.addEventListener("click", function (){

   if(nickname == ""){
      nickname.setCustomValidity("Must Enter a Nickname for the Simulator. 2-15 Characters.");
   }
   else if(nickname < MIN || nickname > MAX){
      nickname.setCustomValidity("Must Enter a Nickname for the Simulator. 2-15 Characters.");
   }
   else{
      nickname.setCustomValidity("");
         selectElement.setCustomValidity("");
   }
         })

      
