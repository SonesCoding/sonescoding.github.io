"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Sones
      Date:   04/13/23

      Filename: Sonesproject09-01b.js
*/

let nameValue;
let name;
let value;

let query = location.search.slice(1);
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);
let cardFields = query.split(/&/g);



for (let x = 0; x < cardFields.length; x++){
      nameValue = cardFields[x].split(/=/g);
      name = nameValue[0];
      value = nameValue[1];
      document.getElementById(name).textContent = value;
}