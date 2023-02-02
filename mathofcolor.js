
    
    
    function Complimentary (r, b, g){
        console.log
    let r;
    let b;
    let g;

    let cr;
    let cb;
    let cg;
    
        r = document.getElementById("r").value; 
        b = document.getElementById("b").value; 
        g = document.getElementById("g").value;

        cr = 255 - r;
        cb = 255 - b;
        cg = 255 - g;

        result = ("The complimentary color of " + r +", " + b + ", " +
g + " is " + cr + ", " + cb + ", " + cg) 
}
document.getElementById("submit").addEventListener("click", Complimentary);
