'use strict';
let airline="tap air portugal";
//it will take the start index position"-->";
console.log(airline.indexOf('r'));//6
//it will take the last index position"<--";
console.log(airline.lastIndexOf('r'));//10
//slice is used to split the string(0,1);here 0 is the start index and 1 is the last index;
console.log(airline.slice(4));//air portugal(here 4 is the start index and till to last);
console.log(airline.slice(-4));//it will check frome last;
console.log(airline.slice(4,7));//air
const a="surya";
//to convert upercase
console.log(a.toUpperCase());//SURYA
//to lowercase
console.log(a.toLowerCase());//surya

const aa=" surya ";
//trim
console.log(aa.trim());//surya(i will remove space)

//to check the word is present or not
let str="my name is surya and i am surya";
console.log(str.includes("surya"));//true(note:it will also check case sensettive)
console.log(str.startsWith("my"));//it will check first word//true
console.log(str.endsWith("surya"));////it will check last word//true

//replace word;
const aaa="$200";
console.log(aaa.replace('$','&'));//&200

console.log(str.replace("surya","harish"));//my name is harish and i am surya(it will change first occurance)
console.log(str.replaceAll("surya","harish"));//my name is harish and i am harish(it selected  all occurance)
//or//
console.log(str.replace(/surya/g,"harish"));//my name is harish and i am harish.

//split
console.log(str.split(" "));//['my', 'name', 'is', 'surya', 'and', 'i', 'am', 'surya']//it will store in arrays
//To join the string of array by using join;
let str1=str.split(" ");
console.log(str1.join(" "));//my name is surya and i am surya//it will join the arrays into string;

//padStart,padEnd
let name1="suryaguru";
console.log(name1.padStart(20,"-"))//it will convert into equal strin with size 20 with -;//-----------suryaguru
console.log(name1.padEnd(20,"-"))//suryaguru-----------

//repeat
console.log(name1.repeat(3));//it will repeat the message 3 times
//end//

