// Only change code below this line
    var myClothes = {
        hat: "Fedora",
        shirt: "Nike",
        shoes: "Converse"
 };
 function (myObj){
   var hatValue = myClothes.hat;
   var shirtValue = myClothes.shirt;
   var shoesValue = myClothes.shoes;
   return { hatValue, shirtValue, shoesValue };
 }
// Only change code above this line
console.log(myFunction(myObj));
module.exports = myFunction(myClothes);
