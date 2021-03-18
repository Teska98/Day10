// Create lion object here
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1
 };
// End of lion object


function myFunction("roar", "roar-roar"){
// Only chane code below this line
   lion["roar"] = "roar-roar";
   return lion;
// Only change code above this line
 }
myFunction("roar", "roar-roar");
module.exports = myFunction;
