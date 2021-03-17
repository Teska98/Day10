// Only change code below this line
    var myFood = {
        vegetable: "carrot",
        fruit: "orange",
        drink: "water"
 };
 function (myObj){
   var vegetableValue = myClothes["vegetable"];
   var fruitValue = myClothes["fruit"];
   var drinkValue = myClothes["drink"];
   return { vegetableValue, fruitValue, drinkValue };
 }
// Only change code above this line
console.log(myFunction(myObj));
module.exports = myFunction(myFood);
