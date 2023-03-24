const MIN = 2;
const MAX = 15;

      warningBox = document.getElementById("warningBox");
      result = document.getElementById("result");

      document.getElementById("submit").addEventListener("click", message);

      function message(){

         warningBox.innerHTML = "";
         result.innerHTML = "";

         let nickname = document.getElementById("NickN").value;

         let selectElement = document.querySelector('#select1');

         let r = document.getElementById("r").value; 
         let b = document.getElementById("b").value; 
         let g = document.getElementById("g").value;
   
         let cr = 255 - r;
         let cb = 255 - b;
         let cg = 255 - g;



         let output = (nickname+ "'s favorite color is " + selectElement.value +"!!\n Your Mixed Color is "+cr+", "+cb+", "+cg+"!");


         try{
            if(r == "") throw "Must be a number between 0-255.";
              if(b =="") throw "Must be a number between 0-255.";
              if(g =="") throw "Must be a number between 0-255.";
      
              if(nickname == "") throw "Must Enter a Nickname for the Simulator. 2-15 Characters.";
      
              if(nickname < MIN || nickname > MAX) throw "Must Enter a Nickname for the Simulator. 2-15 Characters.";
      
         }
      
           catch(err)
           {
              warningBox.innerHTML=" " + err;
              
           }

         finally{
            result.innerHTML = output;
         }

      }
