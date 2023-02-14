function background(){

    let htmlCode = "";
    let color = document.getElementById("colors").value;

let symbolism = new Array(8);
symbolism[0]="Passion, Love, Anger, Warfare. Almost everyone can agree red is a HOT color. Hot in what context though? Throughout history red has been associated with the Devil and Cupid.";
symbolism[1]="Energy, Happiness, Vitality. Orange is associated with the changing of seasons quite often. Orange demands your attention or you will miss the leaves change.";
symbolism[2]="Happiness, Hope, Deceit. Yellow catches our eyes more than any other. While yellow can be an energetic, cheerful color... it is also the color of hazmat suits and traffic yields."; 
symbolism[3]="New Beginnings, Abundance, Nature. Green is a very grounded color. It is a very stable color and can balance a design. It's shade has a major impact on the design as well. Think about all the different kinds of green!"; 
symbolism[4]="Calm, Responsible, Sadness. A lot of symbolism depends on the shade of blue.The shade you pick for design will carry a weight different than other shades. Dark blue can mean strength and reliability. Light blues can represent peace, spirituality, and friendliness."; 
symbolism[5]="Creativity, Royalty, Wealth. Purple was one of the hardest colors to create in ancient history. Wearing it was a symbol of propsperity. Purple can give a feeling of luxury and romance perhaps.";
symbolism[6]="Mystery, Elegance, Evil. Black is a strong neutral color mostly used for accents, but it's cultural weight is stronger than theory.";
symbolism[7]="Moody, Conservative, Formality. Typically regarded as a formal color, used heavily by corporates. Gray is often used to replace almost every slightly desaturated version of a color.";
symbolism[8]="Purity, Cleanliness, Virtue. White works well with every color, much like black. It makes an ideal backdrop for winter and summer. Cultural signifigance in the East is drastically different from the west. White has to be one of the most versatile colors.";



    
    
  /*  if(document.getElementsByName("colors-select").value=='orange'){
        htmlCode = "<p>"+symbolism[1]+"</p>\n<img alt='' src='images\orange.jpg'>";
        board.innerHTML = htmlCode;
     }
    
    else if(document.getElementsByName("colors-select").value=='yellow'){
        htmlCode = "<p>"+symbolism[2]+"</p>\n<img alt='' src='images\yellow.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='green'){
        htmlCode = "<p>"+symbolism[3]+"</p>\n<img alt='' src='images\green.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='blue'){
        htmlCode = "<p>"+symbolism[4]+"</p>\n<img alt='' src='images\blue.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='purple'){
        htmlCode = "<p>"+symbolism[5]+"</p>\n<img alt='' src='images\purple.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='black'){
        htmlCode = "<p>"+symbolism[6]+"</p>\n<img alt='' src='images\black.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='gray'){
        htmlCode = "<p>"+symbolism[7]+"</p>\n<img alt='' src='images\gray.jpg'>";
        board.innerHTML = htmlCode;
     }

     else if(document.getElementsByName("colors-select").value=='white'){
        htmlCode = "<p>"+symbolism[8]+"</p>\n<img alt='' src='images\white.jpg'>";
        board.innerHTML = htmlCode;
     } */

     switch (color) {
  case 'red':
    htmlCode = "<p>"+symbolism[0]+"</p>\n";
        text.innerHTML = htmlCode;
        const board = new Image;
        board.src = 'images\red.jpg';
        document.board.appendChild(board);

    break;
  case 'orange':
    htmlCode = "<p>"+symbolism[1]+"</p><img alt='' src='images\orange.jpg'>";
        text.innerHTML = htmlCode;
    break;
  case 'yellow':
    htmlCode = "<p>"+symbolism[2]+"</p>\n<img alt='' src='images\yellow.jpg'>";
    text.innerHTML = htmlCode;
    break;
  case 'green':
    htmlCode = "<p>"+symbolism[3]+"</p>\n<img alt='' src='images\green.jpg'>";
    text.innerHTML = htmlCode;
    break;
  case 'blue':
    htmlCode = "<p>"+symbolism[4]+"</p>\n<img alt='' src='images\blue.jpg'>";
    text.innerHTML = htmlCode;
    break;
  case 'purple':
    htmlCode = "<p>"+symbolism[5]+"</p>\n<img alt='' src='images\purple.jpg'>";
    text.innerHTML = htmlCode;
    break;
  case 'black':
    htmlCode = "<p>"+symbolism[6]+"</p>\n<img alt='' src='images\black.jpg'>";
    text.innerHTML = htmlCode;
    break;
case 'gray':
    htmlCode = "<p>"+symbolism[7]+"</p>\n<img alt='' src='images\gray.jpg'>";
    text.innerHTML = htmlCode;

    break;
case 'white':
    htmlCode = "<p>"+symbolism[8]+"</p>\n<img alt='' src='images\white.jpg'>";
        text.innerHTML = htmlCode;
    break;
default:
    htmlCode = "<p></p>\n";
        text.innerHTML = htmlCode;
}
  }