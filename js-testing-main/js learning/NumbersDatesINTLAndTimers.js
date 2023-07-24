"use strict";
//Note number are only represented by 64 bit only but 53 are used to store the value and rest are use to store in the decimal points
//Converting and Checking Numbers//
console.log(23 === 23.0); //all the integer value consist of decimal points
//output//
//TRUE//

//BASE 10 = 0 TO 9
//BINARY BASE 2 = 0 AND 1
console.log(0.1 + 0.2); //0.30000000000000004//its is javascript bug;
console.log(0.1 + 0.2 === 0.3); //false

console.log(Number("23"));
///////(OR)///////////
console.log(+"23");
//PARSING INT//
console.log(Number.parseInt("30px", 10)); //it will take only the number in the string;
console.log(Number.parseInt("px30", 10)); //it will not work
//using 10 here is its is a base number if binary number use 2;
console.log(Number.parseInt("1010", 2)); //output: 10,it will return binary base 10 number

//PARSING float//
console.log(Number.parseFloat("2.5rem")); //output: 2.5
//Note:while using int here output:2 and space will not affect the result EX:console.log(Number.parseFloat('  2.5rem    ')); and it also can use console.log(parseFloat('2.5rem')); will result same output because it is 'global' but using  Number.parseFloat() is good pratice;
console.log("======================");
//NAN method//
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20X")); //true
console.log("=====================");
//FINITE method//
console.log(Number.isFinite(20)); //true
//it is opposite of NAN
console.log(Number.isFinite(+"20X"));

//Integer//
console.log(Number.isInteger(23)); //its is better than NAN
console.log("==========================");
//////////////////////
//MATH AND ROUNDING//
//sqrt
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

//max
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, "3", 4, 5));

// PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
console.log("==================");
//Rounding integers//
console.log(Math.trunc(2.304)); //2

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
//---->*

console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23
//*<-----
//Note:trunc and floor are same but if we give negative number the floor will oppsite
//Example
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//Rounding decimals
console.log((2.7).toFixed(0)); //3(the value will print in string)
console.log(+(2.345).toFixed(2)); //now it will convert to number and is also round the value(Output;2.35)
console.log("===================");
//%--/
console.log(5 % 2); //1
console.log(5 / 3); //5=2*2+1;=5

console.log(8 % 3); //2
console.log(8 / 3); //2*3=6+'2'=8

console.log(9 % 4); //1
console.log(9 / 4); //2*4=8+1=9

console.log("=================");
//Numberic Separators
//in video 173//

//BIG INT//
console.log(2 ** 53 - 1); //here 2 is the base number because we are working only in '0'and '1'
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
//to solve the solution javaScript introduce BIGINT
console.log(
  typeof 123456789012345678901234567899001234567890123456789001212345678991223n
); //here n is a bigint
console.log(
  BigInt(123456789012345678901234567899001234567890123456789001212345678991223)
);
//Note:we can to any oberation on bigint and int but we can do both are bigint but we can do compare operation on bigint;but it will not work on '==='but Math function will not work
//division
console.log(12n / 3n); //4(i will cut the decimal points)

//Creating Dates//
const now = new Date();
console.log(now);
console.log(new Date(2037, 10, 19, 15, 23, 5));
//Note: here 2037 is year ,10 is it the month(here month is start from 0 so that 10 is november),19 is day,15 is hour,23 is min,5 is sec;
const fucture = new Date(2037, 10, 19, 15, 23, 5);
console.log(fucture.getFullYear()); //2037
console.log(fucture.getMonth()); //10
console.log(fucture.getDate()); //19
console.log(fucture.getDay()); //it will show weeks//4
console.log(fucture.getTime()); //it will multiply the time (3*24*60*60*1000)//2142237185000
console.log(fucture.getHours()); //15
console.log(fucture.getMinutes()); //23
console.log(fucture.getSeconds()); //5
console.log(fucture.toISOString());
console.log(Date.now());
fucture.setFullYear(2040); //it will set the year

//Date calculation
const calcDayPassed=(date1,date2)=>Math.abs(date1-date2)/(1000*60*60*24);
console.log(calcDayPassed(new Date(2002,9,19),new Date(2002,9,19)));
console.log(new Date().toISOString());

//INTERNATIONALIZING DATES(INIT)
const nowIn=new Date();
const inn=new Intl.DateTimeFormat('hi-IN').format(nowIn);
console.log(inn);

// const nowIn=new Date();
// const option={
//   day:"numeric",
//   month:"long",
//   year:"numeric",
//   hour:"numeric",
//   minute:"numeric",
// }; 
// time.textContent=new Intl.DateTimeFormat('ta-IN',option).format(nowIn);
// const local=navigator.language;it will find the local language ;
//Number formate
const num=2034005066;
const option2={
  style:'currency',
  currency:'INR',
};
console.log(new Intl.NumberFormat('en-IN',option2).format(num));

//set Timers out
setTimeout(()=>console.log('hi'),3000);//3sec
//Note it will run once

//setInterval
setInterval(function(){
  const now=new Date();
  // console.log(now);
},1000);
//we can use clearinterval for setInterval as function caling (EP:181);