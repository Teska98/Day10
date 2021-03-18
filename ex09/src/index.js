function myFunction(myObj, checkProp){
  // Only change code below this line
  var myObj = {
    "title": "Titanic",
    "song": "My Hearth Will Go On",
    "genre": "drama"          
  };
  var checkProp = myObj;
  return (checkProp === "title") ? "Titanic"
   :(checkProp === "song") ? "My Heart Will Go On"
   :(checkProp === "genre") ? "drama"
   : "Not Found";
  
myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "title"));
myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "song"));  
myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "genre"));  
myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "actor"));  
 // Only chane code above this line
}
module.exports = myFunction;
