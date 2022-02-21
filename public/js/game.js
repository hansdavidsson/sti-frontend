function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
      
    }
  }
}

  function myMove2() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 350;
    clearInterval(id);
    id = setInterval(frame, -5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.top = pos + "px"; 
        elem.style.right = pos + "px"; 
        
      }
    }
  }

  function moveRight() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        /* elem.style.top = pos + "px";  */
        elem.style.left = pos + "px"; 
        
      }
    }
  }

  function moveDown() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        /* elem.style.left = pos + "px";  */
        
      }
    }
  }

  function moveLeft() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos--; 
        /* elem.style.top = pos + "px";  */
        elem.style.left = pos + "px"; 
        
      }
    }
  }

  function moveUp() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        /* elem.style.left = pos + "px";  */
        
      }
    }
  }

  