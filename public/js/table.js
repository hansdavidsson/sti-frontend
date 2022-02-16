function createCol() {
    var seq=0;

function myFunction(){
// Increment the value
seq += 1

// The string value that will be displayed
var value = '';

// If sequence is less than 10, prefix with 000
if(seq < 10) {
    value = '000' + seq;
}
// If sequence is less than 100, prefix with 00
else if(seq < 100) {
    value = '00' + seq;
}
// If sequence is less than 1000, prefix with 0
else if(seq < 1000) {
    value = '0' + seq;
}
// Otherwise, just use the value directly
else {
    value = seq;
}

// Display the formatted value (ie prefixed with 0's)
document.getElementById("demo").value = value;

}





    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", seq);
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
