// from data.js
var tableData = data;

// YOUR CODE HERE!

//Refererence to table body
var tbody = d3.select("tbody");

//Console.log the UFO data from data.js
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(function([key,value]) {
        console.log(key,value);
    });
    
});





//Step 1: Create a Build Table function


//Step 2: Create a handle Click function

    //You'll need to filter the data according to the form

//Step 2: Event Listener

//Step 1: Build table when page loads


//Hints:
    //1. Make sure the table generates on Page Load
    //2. Be able to filter multiple lines, and is recreated with only newly selected data
    //3. If you clear out filter, the entire table should load






    