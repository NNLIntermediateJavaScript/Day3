/*
 * FileName:  Complete/01AjaxDevelopment.js
 * Topics: 
 *      AJAX Development
 */
console.log("FileName:  Complete/01AjaxDevelopment.js");

/* 
 * Topic:  AJAX Development
 */
console.log("");
console.log("****************************************************************");
console.log("Topic:  AJAX Development");
console.log("****************************************************************");

function dataLoaded(data) {
   console.log(typeof data);
   let table = dom.createTableFromJSON(data.query.results.quote, 
        ["symbol", "Open", "Change"]);
   var body = document.getElementsByTagName("body")[0];
   body.appendChild(table);
}

let yqlPath = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22MU%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
let localPath = "stocks.json";
ajax.send(localPath, "GET", dataLoaded);