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
var bot1 = new Bot(18,18)
loop()



function render(){
    document.getElementById('game-display').innerHTML = '<div id="grid-container"></div>'
    const img = new Image(25, 25); // width, height
    img.src = "mrm.png";

    const imgBot = new Image(25, 25); // width, height
    imgBot.src = "skull.png";

    for(let i = 0; i < map.length; i++){     
        for(let j = 0; j < map[i].length; j++){
            var container = document.getElementById('grid-container')
            var square = document.createElement('div')
         
            if(map[i][j] == 1) square.classList.add('square')
            if(map[i][j] == 0) square.classList.add('square-walls')
            /* if(map[i][j] == 2) square.classList.add('square-filled-yellow') */
            if(map[i][j] == 2) square.appendChild(img);
            if(map[i][j] == 3) square.appendChild(imgBot);
            /* if(map[i][j] == 3) square.classList.add('square-filled-red') */

            container.append(square)
        }
    }
}



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
            
            console.log('BOOOM!')
            
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
}

function isCollision(x1,y1,x2,y2, radius) {
    return (Math.abs(x1-x2)+Math.abs(y1-y2)<radius);
}

if (isCollision(map.posx,map.posy, bot1.posx,bot1.posy, 25)) {
    // pacman and ghost #i collide
}



// misc
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



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






