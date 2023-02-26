
        const MIN = 0;
        const MAX = 255;

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

    try{
        if(r > MAX || r<MIN) throw "Must be a number between 0-255.";
        if(b > MAX || b<MIN) throw "Must be a number between 0-255.";
        if(g > MAX || g<MIN) throw "Must be a number between 0-255.";

        if(r == "") throw "Must be a number between 0-255.";
        if(b =="") throw "Must be a number between 0-255.";
        if(g =="") throw "Must be a number between 0-255.";

        
        cr = 255 - r;
        cb = 255 - b;
        cg = 255 - g;
        
        result = ("The complimentary color of " + r +", " + b + ", " +
        g + " is " + cr + ", " + cb + ", " + cg)
 
        window.alert(result)
     }
     catch(err){
        warningBox.innerHTML=" " + err;
        
     }

        
}


