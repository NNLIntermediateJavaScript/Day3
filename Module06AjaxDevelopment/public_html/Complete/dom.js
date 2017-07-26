let dom =  (function() {
    function createTableFromJSON(json, propsToDisplay) {
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

        return table;
    } 

    return { createTableFromJSON: createTableFromJSON }
}());



