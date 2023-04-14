"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Sones
      Date:   04/12/23

      Filename: Sonesproject09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if(localStorage.getItem(sbloggerVisit)){

      let storedLastDate = localStorage.getItem(sbloggerVisit);
      lastVisitDate.textContent = storedLastDate;

      let lastDate = new Date(storedLastDate);

      for(let x of articleDates){
            let articleDate = new Date(x);
            if (articleDate>lastDate){
                  x.innerHTML += "<strong>new</strong>";
            }
      }
}
else{
      lastVisitDate.textContent = "Welcome to SBlogger!";
      for(let x of articleDates){
                  x.innerHTML += "<strong>new</strong>";
      }
}
let displaycd = document.getElementById("lastVisitDate");
let currentDate = new Date().toLocaleDateString();

displaycd.textContent = currentDate;