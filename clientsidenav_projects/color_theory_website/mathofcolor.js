
        const MIN = 2;
        const MAX = 15;

        warningBox = document.getElementById("warningBox");
        warningBox.innerHTML = "";
    
        document.getElementById("submit").addEventListener("click", Complimentary);

    function Complimentary (){
    let r;
    let b;
    let g;

    let cr;
    let cb;
    let cg;
    
    r = document.getElementById("r").value; 
    b = document.getElementById("b").value; 
    g = document.getElementById("g").value;
    nickname = document.getElementById("NickN").value;

   const btn = document.querySelector('#btn');
   const sb = document.querySelector('#color')

    try{

        if(r == "") throw "Must be a number between 0-255.";
        if(b =="") throw "Must be a number between 0-255.";
        if(g =="") throw "Must be a number between 0-255.";

        if(nickname == "") throw "Must Enter a Nickname for the Simulator. 2-15 Characters.";

        if(nickname < MIN || nickname > MAX) throw "Must Enter a Nickname for the Simulator. 2-15 Characters.";



        cr = 255 - r;
        cb = 255 - b;
        cg = 255 - g;
 

        btn.onclick = (e) => 
      {
         e.preventDefault();
         const selectedValues = [].filter
             .call(sb.options, option => option.selected)
             .map(option => option.text);

         result = (nickname + "'s favorite color is "+ selectedValues + "!!!\nThe complimentary color of " + r +", " + b + ", " + g + " is " + cr + ", " + cb + ", " + cg)
         window.alert(result);
     };

     }
     catch(err){
        warningBox.innerHTML=" " + err;
        
     }

   }