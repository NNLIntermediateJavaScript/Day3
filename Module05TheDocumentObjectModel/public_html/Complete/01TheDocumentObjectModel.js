/*
 * FileName:  Complete/01TheDocumentObjectModel.js
 * Topics: 
 *     The Document Object Model
 */
console.log("FileName:  Complete/01TheDocumentObjectModel.js");
   
/*  
 * Topic:  The Document Object Model
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  The Document Object Model");
console.log("****************************************************************");
  
function jsonToTable(json) {
    var propsToDisplay = ["symbol", "Open", "Change"];
     
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");
  
    // creating all cells
    json.forEach(function(quote) {
  
        // creates a table row
        var tr = document.createElement("tr");

        propsToDisplay.forEach(
            function(prop) { 
                var td = document.createElement("td");
                td.setAttribute("class", "tableCell");
                var textNode = document.createTextNode(quote[prop]);
                td.appendChild(textNode);
                tr.appendChild(td);    
            }
        );
        
        // add the row to the end of the table body
        tbody.appendChild(tr);
    });
 
    // put the <tbody> in the <table>
    table.appendChild(tbody);
    
     // sets the border attribute of table
    table.setAttribute("class", "table");
    table.setAttribute("id", "jsonTable");   
    
    // appends <table> into <body>
    body.appendChild(table);
} 

console.log("");
console.log("jsonData"); 
console.log(json.query.results.quote);
jsonToTable(json.query.results.quote); 


console.log("");
console.log("DOM Retrieval");

console.log("");
console.log("#jsonTable");
var jsonTable = document.getElementById("jsonTable");
console.log(jsonTable);

console.log("");
console.log(".tableCell");
var tableCells = document.getElementsByClassName("tableCell");
console.log(tableCells);
console.log(tableCells[0]);

console.log("");
console.log("<tr>");
var tableRows = document.getElementsByTagName("tr");
console.log(tableRows);
console.log(tableRows[0]);

console.log("");
console.log("tr > td");
var firstTD = document.querySelector("tr > td");
console.log(firstTD);

console.log("");
console.log("tr > td[class]");
var tds = document.querySelectorAll("tr > td[class]");
console.log(tds);
console.log(tds[0]);

console.log("");
console.log("td:last-child");
var lastTD = document.querySelectorAll("td:last-child");
console.log(lastTD);
console.log(lastTD[0]);

