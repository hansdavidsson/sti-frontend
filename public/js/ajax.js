var tableData = [
    {name:"HIF", points:9}
    ,{name:"DIF", points:6}
    ,{name:"BP", points:5}
    ,{name:"HSK", points:3}
    ,{name:"AIK", points:0}
]
tableData = JSON.stringify(tableData)
console.log(tableData)

var ettElement = document.getElementById("app")

var aTable = document.createElement("table")
aTable.appendChild(createRow())

ettElement.appendChild(aTable)



function buttonClick(){
    aTable.appendChild(createRow())
}

function createRow(){
    var aRow = document.createElement("tr") 
    aRow.appendChild(createCell())   
    return aRow
}

function createCell(){
    var aCell = document.createElement("td")
    return aCell;
}

function createTable(){
    
}