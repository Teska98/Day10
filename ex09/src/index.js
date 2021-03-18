function myFunction(myObj, checkProp){
  // Only change code below this line
  var myObj {
    "title": "Titanic",
    "song": "My Hearth Will Go On",
    "genre": "drama"          
  };
  return (checkProp === title) ? "Titanic"
   :(checkProp === song) ? "My Heart Will Go On"
   :(checkProp === genre) ? "drama"
   : "Not Found";
  
console.log(myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "title"));  
console.log(myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "song"));  
console.log(myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "genre"));  
console.log(myFunction({title: "Titanic", song: "My Hearth Will Go On", genre: "drama" }, "actor"));  
 // Only chane code above this line
}
module.exports = myFunction;
