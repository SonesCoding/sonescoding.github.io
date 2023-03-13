"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Lillian Sones
      Date:   2/8/23

      Filename: project05-02.js
*/

const images = 
document.getElementsByTagName("img");

const photoBucket =
document.getElementById("photo_bucket");

const photoList =
document.getElementById("photo_list");

let newItem;
let oldItem;

for(let i = 0; i < images.length; i++){
            images[i].onclick = function(){
      if(this.parentElement.id === "photo_bucket"){
            newItem = document.createElement("li");
            photoList.appendChile(newItem);
            newItem.appendChild(this);
      }
      else{
            oldItem = this.parentElement;
            photoBucket.appendChild(this);
            oldItem.parentElement.removeChild(oldItem);
      }
}

}


