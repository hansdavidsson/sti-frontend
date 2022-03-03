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

render()

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

var tick = 0

// create bot
var bot1 = new Bot(18,18)
loop()


// event listner
/* document.addEventListener('keyup',move) */

class Player{
    constructor(py,px){
        this.py = py
        this.px = px
        map[this.py][this.px] = 2
    }
    
    move(e){

        // remove player from existing pos
        map[this.py][this.px] = 1
        
            switch(e.keyCode){
        
                case 87: // w
                if(map[this.px-1][this.py] == 1) this.px--   
                break
        
                case 83: // s
                if(map[this.px+1][this.py] == 1) this.px++
                break
        
                case 65: // a
                if(map[this.px][this.py-1] == 1) this.py--
                break
        
                case 68: // d
                if(map[this.px][this.py+1] == 1) this.py++
                break
        
            }
        
            //put player on new pos
            map[this.py][this.px] = 2
        }
}


// create player
var player1 = new Player(10,10)











function render(){
    document.getElementById('game-display').innerHTML = '<div id="grid-container"></div>'
    const img = new Image(25, 25); // width, height
    img.src = "mrm.png";

    const imgBot = new Image(25, 25); // width, height
    imgBot.src = "skull5.png";

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






function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




  function loop(){
    //update
    //draw
    tick++
    console.log(tick)
    bot1.updatePosition(tick)
    render()
    setTimeout(loop,33)

}



function move(e){

// remove player from existing pos
map[this.py][this.px] = 1

    switch(e.keyCode){

        case 87: // w
        if(map[this.px-1][this.py] == 1) this.px--   
        break

        case 83: // s
        if(map[this.px+1][this.py] == 1) this.px++
        break

        case 65: // a
        if(map[this.px][this.py-1] == 1) this.py--
        break

        case 68: // d
        if(map[this.px][this.py+1] == 1) this.py++
        break

    }

    //put player on new pos
    map[this.py][this.px] = 2
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