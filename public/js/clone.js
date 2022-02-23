class Bot{
    constructor(py,px){
        this.py = py
        this.px = px
        map[this.py][this.px] = 3
    }
    updatePosition(tick) {
        const wait = 100
        
        // remove bot from existing pos
        map[this.py][this.px] = 1
        
        // get random int (1-4)
        let action = randomInteger(1,4)
        
        // update position
        switch(action){
            case 1:  // w
                if(map[this.py-1][this.px] == 1) this.py--
                break
            case 2:  // s
                if(map[this.py+1][this.px] == 1) this.py++
                break
            case 3:  // a
                if(map[this.py][this.px-1] == 1) this.px--
                break
            case 4:  // d
                if(map[this.py][this.px+1] == 1) this.px++
                break
        }
        // put bot on new pos
        map[this.py][this.px] = 3
    }
}

// current grid size 500x500
// current box size 25x25

// initial position
var row = 1
var col = 1
var frag = 3
// initialise grid

// walls = 0
// paths = 1
// player = 2
// enemy = 3

var map = [ 
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0],
            [0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0],
            [0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0],
            [0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0],
            [0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0],
            [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0],
            [0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0],
            [0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
            [0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0],
            [0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0],
            [0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0],
            [0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0],
            [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]        
        ]
// render at initial position
map[row][col] = 2

// event listner
document.addEventListener('keyup',move)

// create bot
var bot1 = new Bot(1,18)
loop()
/* var x = document.createElement('IMG');
x.setAttribute("src", "mrm.png");
    x.setAttribute("width", "20");
    x.setAttribute("height", "20");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x); */

/* var Image: new (width:20px number, height:20px number) => HTMLImageElement */

/* #mrm {
<Img>*/
/* #meeseek {

<img src="mrm.png" alt="Girl in a jacket" width="25" height="25"></img>
<img src="img_chania.jpg" alt="Flowers in Chania"></img>

} */


/* function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!"
  }  */
/*   .meeseek{
    <img src="mrm.png" alt="Girl in a jacket" width="25" height="25"></img>
 } */
 /* let img = document.createElement("img");
 img.src = source.getAttribute('mrm.png');
 document.getElementByID("target").appendChild(img); */

/*  function add_img() { 
	var img = document.createElement('img'); 
    img.src = 'mrm.png'; 
	document.getElementById('body').appendChild(img);
} */
/* const img = document.querySelector("img"); 
img.src = "mrm.png"; */

/* const img = new Image(25, 25); // width, height
img.src = "mrm.png";
document.body.appendChild(img); */


function render(){
    document.getElementById('game-display').innerHTML = '<div id="grid-container"></div>'
    const img = new Image(25, 25); // width, height
img.src = "mrm.png";
    for(let i = 0; i < map.length; i++){
        
        for(let j = 0; j < map[i].length; j++){
            var container = document.getElementById('grid-container')
            var square = document.createElement('div')
            /* var image = document.createElementBy('div') */

            /* const img = new Image(25, 25); // width, height
img.src = "mrm.png"; */
/* document.body.appendChild(img); */

            if(map[i][j] == 1) square.classList.add('square')
            if(map[i][j] == 0) square.classList.add('square-walls')
            /* if(map[i][j] == 2) square.classList.add('square-filled-yellow') */
            /* if(map[i][j] == 2) square.classList.add('mrMee()') */
           /*  if(map[i][j] == 2) square.classList.add('img') */
            if(map[i][j] == 2) square.appendChild(img);
            if(map[i][j] == 3) square.classList.add('square-filled-red')

            container.append(square)
        }
    }
}

/* function mrMee() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "mrm.png");
    x.setAttribute("width", "20");
    x.setAttribute("height", "20");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  } */

function move(e){
    // up w - 87
    // down s - 83
    // left a - 65
    // right d - 68
    // grenade g- 71

    // remove player from existing pos
    map[row][col] = 1

    // update player pos
    // add boundry check
    switch(e.keyCode){
        case 87: // w
        if(map[row-1][col] == 1) row--
        break

        case 83: // s
        if(map[row+1][col] == 1) row++
        break

        case 65: // a
        if(map[row][col-1] == 1) col--
        break

        case 68: // d
        if(map[row][col+1] == 1) col++
        break

        case 71: // g
        if(frag>0){
            for(let i = -1; i <= 1; i++){
                for(let j = -1; j <= 1; j++){
                    map[row+i][col+j] = 1
                }
            }
            frag--
        }
        else{
            console.log('No frags remain!')
        }
        break
    }

    //put player on new pos
    map[row][col] = 2
}

var tick = 0

function loop(){
    //update
    //draw
    tick++
    console.log(tick)
    bot1.updatePosition(tick)
    render()
    setTimeout(loop,33)

    //TEST
    //if (img på samma plats som bot +/- 1px BREAK (WIN)
}

// misc
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* function setTimeout() {

} */

/* var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 1000);
{/* <progress value="0" max="10" id="progressBar">

</progress> */

/* function makeAlert(){ 
    alert("Popup window!");
}; */


ProgressCountdown(10, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`Time's up!: ${value}.`));

function ProgressCountdown(timeleft, bar, text) {
  return new Promise((resolve, reject) => {
    var countdownTimer = setInterval(() => {
      timeleft--;

      document.getElementById(bar).value = timeleft;
      document.getElementById(text).textContent = timeleft;

      if (timeleft <= 0) {
        clearInterval(countdownTimer);
        resolve(true);
      }
    }, 1000);
  });
}




