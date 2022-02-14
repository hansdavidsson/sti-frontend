function createCol() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
  }

  function createRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    //var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW";
    //cell2.innerHTML = "NEW CELL2";
  }

  function delRow() {
    document.getElementById("myTable").deleteRow(0);
  }
