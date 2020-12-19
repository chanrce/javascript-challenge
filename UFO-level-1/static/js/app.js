// from data.js
var tableData = data;

// YOUR CODE HERE!

//Refererence to table body
var tbody = d3.select("tbody");

//Console.log the UFO data from data.js
//Adding table to website
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key,value]) {
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value)
        console.log(key, value)
    });
    
});


//Form and button data

//Select button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form-control");

//Event handlers
button.on("click", runEnter);
form.on("click", runEnter)

//Complete the event handler function for the form
function runEnter() {
    //Prevent page from refreshing
    d3.event.preventDefault();
    //Select input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    //Get value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //Use form input to filter data by date
    var filterData = tableData.filter(function(sighting){
        return sighting.datetime === inputValue;

   
    })

    console.log(filterData);

    var tbody = d3.select("tbody");

    //Clears table before rendering again
    tbody.html("");
    
    
    filterData.forEach(function(UFOReport) {
        var row = tbody.append("tr");
    
        Object.entries(UFOReport).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value)
        
        });
        
    });
};
