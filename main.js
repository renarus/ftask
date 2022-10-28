// 1-ci

const sentence = ["sense.", "make", "all", "will", "This"];
function reverseArray(){
    return sentence.reverse()
}
console.log(reverseArray(sentence));
// 2-ci
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
function greetAliens(){
    for(let i=0;i<aliens.length;i++){
      console.log(` Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`
      )
    }
}
greetAliens(aliens);
// 3-cu
const coolStuff = [
    "gameboys",
    "skateboards",
    "backwards hats",
    "my room",
    "temporary tattoos"
  ];
  const myStuff = [
    "sweaters",
    "skateboards",
    "family-night",
    "my room",
  ];
 
  function justCoolStuff(myStuff, coolStuff) {
    const arr = [];
    myStuff.forEach(item1 => {
        coolStuff.forEach(item2 => {
            if (item1 == item2) {
                arr.push(item1);
            }
        })
    });
    return arr;
}
console.log(justCoolStuff(myStuff, coolStuff));


// 4-cu
const meal = [
    { name: "arugula", source: "plant" },
    { name: "tomatoes", source: "plant" },
    { name: "lemon", source: "plant" },
    { name: "olive oil", source: "plant" },
  ];
  const dinner = [
    { name: "hamburger", source: "meat" },
    { name: "cheese", source: "dairy" },
    { name: "ketchup", source: "plant" },
    { name: "bun", source: "plant" }
  ];
  function isTheDinnerVegan(arr){
    return arr.every((item) => item.source === "plant");

    }
  
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  
  
