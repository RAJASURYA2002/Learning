"use strict";
//simple Array Method
//we can also use slice method in arrays//
//it will not change the original array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2) + " slice"); //c d e
console.log(arr.slice(2, 4) + " slice"); // c d
console.log(arr.slice(-1) + "slice"); //e
console.log(arr.slice(1, -2) + " slice"); //b c//here -2 means to print expect last two value

//splice//
//it is similar to slice but if we extract value then original array will modtify!;

// console.log(arr.splice(2)+" splice");//c d e(the new array)
// console.log(arr+" splice");//a b(the old array modify)

// console.log(arr.splice(-1)+ " splice");//it will delete last element;

// console.log(arr.splice(1,2)+" splice");
//**if we give two value it will delete at the position of the value;***
// let array=[1,2,3,4,5];
// array.splice(1,1);//here the first value is starting position and the secound value is how much value need to be delete
// console.log(array+"------------");
//splice//
//reverse array//

let arr1 = [5, 4, 3, 2, 1];
console.log(arr1.reverse() + " reverse"); //it will reverse the array and the original array also modify
//output:1 2 3 4 5
console.log(arr1 + " reverse orginal array");

//conact//
//it will not change orginal array
const array = arr.concat(arr1);
console.log(array + "concat array");
//or//
console.log([...arr, ...arr1] + "concat another method");

//join//
//it will not modify orginal array;
console.log(array.join(" * ") + " join");
console.log(array);
console.log("-------------------------------");
//----------------------------------------//
//The new at Method//
const newArr = [23, 11, 64];
console.log(newArr[0] + " not at method"); //64
console.log(newArr.at(0) + " at method"); //64
//getting last index
console.log(newArr.length - 1 + "last index method 1");
console.log(arr.slice(-1)[0] + "last index method 2"); //[64][0]poisition=64//it will create new array so that to get value from the array we use [0];
console.log(arr.at(-1) + "last index method 3"); //it is similar to slice method;

//note :at method also work in string;
console.log("-----------------------------");

//forEach loop//

//////////////////////
// let a=[2,3,4,5,6];
// for(let i of a)
// {
//     console.log("hi");
// }//it only work for an array only
///////////////////////
let a = [2, 3, 4, 5, 6];
a.forEach(function (value) {
  console.log(value + " for each");
});
//it will call the function again and again

a.forEach(function (mov, i) {
  console.log(`index ${i + 1}:you number is ${mov} ---forEach`);
}); //here first value is value of array and second value is index;

//Note:in forEach we can not use break and continue;

for (const [i, movement] of a.entries()) {
  console.log(`index ${i + 1}:you number is ${movement} ---forloop advance`);
} //here first value is index and the other is value

//forEach in Map/set

//Maps//
const rest = new Map([
  ["INR", "india"], //INR is key,INDIA is value
  ["USD", "US"],
]);
console.log(rest.get("INR") + "MAP"); //to take the value
rest.set("EUR", "Euro"); //to add the value
console.log(rest);
//forEach
rest.forEach(function (value, key, map) {
  console.log(`${key}:${value} map in forEach`);
});

//SET
//it will remove duplicate value
const rest1 = new Set(["INR", "USD", "EUR", "EUR", "USD"]);
console.log(rest1);

// rest1.forEach(function(value,key,set)
rest1.forEach(function (value, _, map) {
  console.log(`${value}:${value} set in forEach`); //there is no key value so in this loop key value is value(so that we use '_')
});
////////////////////////////
//Creating DOM Elements//
//in bankproject//
//////////////////////////////

//MAP METHOD//
//filter method//
//reduce method//

//map method//
//IT WILL GIVE NEW ARRAY//
const mapArray = [1, 2, 3, 4, 5];
const mapNewArray = mapArray.map(function (mov, i, mapArray) {
  return mov * 2;
});
console.log(mapArray + " old map array");
console.log(mapNewArray + " new map array"); //it will give new array ;

const mapArrowArray = mapArray.map((mov) => mov * 2);
console.log(mapArrowArray + "map arrow function");
const gift = mapArray.map((mov, i) => `${i} : gift count is ${mov}`);
console.log(gift);

const string = "Hello Every One";
const result = string
  .toLowerCase()
  .split(" ")
  .map((word) => word[0]);
console.log(result);

//filter method//
//it will filter the array//
const aa = [100, -2, -3, 4000, 5];
const pos = aa.filter(function (mov, i, aa) {
  return mov > 0;
});
console.log(aa);
console.log(pos); //it will return new array
const arrowfilter = aa.filter((mov) => mov < 0);
console.log(arrowfilter);

//reduce method//
//here acc is accumulator//
const sum = aa.reduce(function (acc, mov, i, aa) {
  return acc + mov;
}, 0); //here 0 is the starting value for acc(for examble acc=0);
console.log(sum + " reduce");
const sumarrow = aa.reduce((acc, mov) => acc + mov, 0);
console.log(sumarrow + "sumArrow");
const max = aa.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, aa[0]);
console.log(max + " reduce max");
const maxx = aa.reduce((acc, mov) => (acc > mov ? acc : mov), aa[0]);
console.log(maxx);

//we can use all the 3 method into single line(it is called pipeline)
const pipeline = mapArray
  .filter((mov) => mov > 0)
  .map((mov) => mov * 2)
  .reduce((acc, mov) => acc + mov, 0);
console.log(pipeline + " pipeline");

//find method//
//it will return the first element of an array(if the given contiction is true)//it is similar to fillter array on there it will return new array here it will return elements
const minus = aa.find((mov) => mov < 0);
console.log(minus + " find");

//to find index of an arrays
const index = aa.findIndex((acc) => -2 === acc);
console.log(index + " index"); //it will find the index of an array

//some method
//its is same as includes method but here we will use the condtion to check
const check = aa.some((acc) => acc >= 4000);
console.log(check + " some");
//if one value all the value true;

//Every Method
console.log(aa.every((mov) => mov > 0) + " every");

//flat method
const arrays1 = [[1, 2, 3, 4, 5], [6, 7], 8, 9, 10];
console.log(arrays1.flat());
const arrays1deep = [[[1, 2, 3], 4, 5], [6, [7]], 8, [9, 10]];
console.log(arrays1deep.flat()); //to avoid 1 level checker using
console.log(arrays1deep.flat(1)); //here 1 default
console.log(arrays1deep.flat(2)); //here its 2 level

//flatmap method
//it will perform both the action of map and flat.Note:its is a 1 level cannot increase

//sort//
const owners = ["jonas", "Zach", "Adam"];
console.log(owners.sort() + "  string sort "); //.it will all so change  originalarrays.
//but we can not do in numbers
//sol
const num = [5, 4, 3, -2, -1, 0];
console.log(num.sort() + " number"); ///-1,-2,0,3,4,5
//return <0 A,B(keep order)
//return >0 B,A(switch order)
num.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(num);
num.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(num);
num.sort((a, b) => a - b);
console.log(num + " one line sort a");
num.sort((a, b) => b - a);
console.log(num + " one line sort");

//arrays method
console.log(new Array(1, 2, 3, 4, 5)); //[1,2,3,4,5];
const x = new Array(7); //[empty*7];
//this type of array does not use in any of an arrays method but we can use in one method called fill
//fill method//
// x.fill(1);
// console.log(x + " fill"); //1 1 1 1 1 1 1
x.fill(1, 3, 5);
console.log(x);//[empty × 3, 1, 1, empty × 2]

//it similar to slice method
//Note:here 1 is the value,3 is the start index,5 is the last index;

//we can use in this type arrays also
//[1,2,3,4,5,6,7,8]

//from//
const y=Array.from({length:7},()=>7);
console.log(y+" from method");
//it is same as fill method but its is more Standard;
/////////////////////////////////////////
//dice roll ex:
const dice=Array.from({length:100},()=>Math.trunc(Math.random() * 10) + 1);
console.log(dice+" example");
/////////////////////////////////////////
//it is also use  in querySelector to itrate same class in loop


//example1
//input-->this is a nice title
//output-->This is a Nice Title

const titleCase=function(str)
{
const cap=str=>str[0].toUpperCase()+str.slice(1);
const exceptions=['a','is','and'];
const titleCase=str.toLowerCase().split(' ').map(word=>(exceptions.includes(word)?word:cap(word))).join(' ');
return titleCase;
};
console.log(titleCase("this is a nice title"));
//important//
//which arrays method is shown in image floder;

//coding challange-4//
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).


// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

// Test data:

const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] },
];
//1:
 dogs.forEach(mov=>(
  mov.recommended_food=Math.trunc(mov.weight**0.75*28)));//it will remove decimal points
console.log(dogs);
// 2:
const find=dogs.find(mov=>mov.owners.includes("Sarah"));
console.log(find);
console.log(`Sarah's dogs is eating too ${find.curFood>find.recommended_food?'much':'little'}`);

//3:
const ownersEatTooMuch=dogs.filter(mov=>mov.curFood>mov.recommended_food).flatMap(mov=>mov.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle=dogs.filter(mov=>mov.curFood<mov.recommended_food).map(mov=>mov.owners).flat();
console.log(ownersEatTooLittle);

//4:
//"Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`"${ownersEatTooMuch.join(" and ")} dogs eat too much!" and "${ownersEatTooLittle.join(" and ")} dogs eat too little!"`);

//5:
console.log(dogs.some(dog=>dog.curFood===dog.recommended_food));

//6:
// current > (recommended * 0.90) && current < (recommended *
//  1.10)
const checkEatingOkay=dog=>dog.curFood>dog.recommended_food*0.9&&dog.curFood<dog.recommended_food*1.1;
console.log(dogs.some(checkEatingOkay));
//7:
console.log(dogs.filter(checkEatingOkay));
//8:
const sortArrays=dogs.slice().sort((a,b)=>a.recommended_food-b.recommended_food);
console.log(sortArrays);

//END////