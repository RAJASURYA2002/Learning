 'use strict';
const bookings=[];

const createBooking=function(flightNum,numPassengers=1,price=100*numPassengers){
        //numpassengers=1 is the default value when undefined pass;
    //old style in ES5
    // numPassengers=numPassengers||1;
    // price=price||0;

    const booking={
        flightNum,
        numPassengers,
        price,
    };
    
    // console.log(booking);
    bookings.push(booking.flightNum,booking.numPassengers,booking.price);
}
createBooking("aa123",20,100);
console.log(bookings+"=====>default parameter")

//object v/s value
const a=10;
const obj={
    name:"surya",
};
const change=function(b,objcheck){
     b=20;
     objcheck.name="harish";
}
change(a,obj);
console.log(a+"=====>it is not a refrence variable.");//it will remain same;
console.log(obj);
console.log("=====>it is  a refrence variable.");
//it will change because it is a refrence variable(because both the object consist of same memory)

//first class function:
//(the function is the value so that we can use the function in any where like in a function with another function arguments);

//higher order function:
//we can use function into the another function also we can return the function in the return statement;

//HIGHER ORDER FUNCTION
const upperCase=function(str){
            return str.toUpperCase();
}
const lowerCase=function(str){
    return str.toLowerCase();
}
const transform=function(str,fn)
{
         console.log(`name: ${fn(str)}----higher order function`)
}
transform("surya",upperCase);
transform("surya",lowerCase);

//we can write a function in return
const greet =function(greeting)
{
    return function(name)
    {
        console.log(`${greeting} ${name} is return function`);
    }
}
const welcome=greet("hello");//it will send hello to greet
  welcome("surya");//it will send the return grret function
  //or//
  greet("welcome")("surya");

  //arrow function
  const grretarrow=greeting=>function(name)
  {
    console.log(`${greeting} ${name} is return function in arrow`);
  }
   const grretarrow1=greeting=>name=>console.log(`${greeting} ${name} is return function in arrow in another method`);
  grretarrow("welcome")("surya");
  grretarrow1("welcome")("surya");

  //the call and applay method(using this)
  const detail=function(name,id)
  {
          console.log(`${name} and your id is ${this.code}${id} on airline name is ${this.airline} welcome---------------`);
  }
  const airline1={
     airline:"airline1",
     code:"LH",
    //  passangerCount:0,
  };
  const airline2={
    airline:"airline2",
     code:"LU",
  };

  //there are three thype to assign the object to the function they are (call,apply,bind)


// call
    detail.call(airline1,"surya",34567);//in this function call the this keyword is pointing the object called airline1,and the remaining value are argument of the function
    detail.call(airline2,"harish",99999);//we can create multiple object then call the function
    const passegersair2=["abc",345645];


    //apply
    //apply//it is old method in ES5
    detail.apply(airline2,passegersair2);
    //or//
    detail.call(airline2,...passegersair2);//we can use spread operator in ES6

    //bind
    const airlinedetail=detail.bind(airline1);//we can bind the object to the function so we can call it by the name many time;
    airlinedetail("Steeve",75484585)
    airlinedetail("ponjeeva",900090)

    const airlinedetainum=detail.bind(airline1,"hi");//default parameter
    airlinedetainum("7869780");

    //using assEvenListener in the bind method
    airline1.passangerCount=0;
    airline1.passangerCount1=function(){
        console.log(this);
        this.passangerCount++;
        console.log(this.passangerCount);
    }
//   document.querySelector('.btn').addEventListener('click',airline1.passangerCount1)         //while passing this like we will get NAN becauuse passangercount1 will look for addevenlistener function it will not point to airline1 object(because the inbulid this keyword will point addevenlisner function   "this keyword is dynamic" so use bint method);
document.querySelector('.btn').addEventListener('click',airline1.passangerCount1.bind(airline1));//on here this keyword will focus/point on  to airline1;


const addTax=(rate,value)=>{
    console.log(rate+"rate");
    console.log(value+"value");
    return value + value *rate+" default value using bind";
}


// console.log(addTax(0.1,200)+"arrow function");

//dout*********************************************************
const addVat=addTax.bind(null,0.23);//in function we need to pass both the value if ther is one value then use null //0.23 point rate//note all the value point first
console.log(addVat(100));//output 123;
//********************************************************************* */


//function call one time
const runonce=function(){
    console.log("running");
}
// runonce();
// runonce();//we are calling again and again(our goal is to run one time)
// (function(){
//     console.log("running ones");
// })();//dout************************************************************
// (() => console.log('not running'))();

//closures

const count=function(){
    let count1=0;
    return function(){
        count1++;
        console.log(`${count1} is closures`);//refer 137 episode;
    }
}
const data=count();
data();
data();
data();
// console.dir(data);//checking
//note([[FunctionLocation]])//the double bracket cannot use in the function,its is reversed location.
//another example
let f;
const g=function(){
    const a=1;
    f=function(){
        console.log(a*2+"1ex")
    }
}
g();
f();

const h=function(){
    const b=3;
    f=function(){
        console.log(b*2+"2ex");
    }
}
h();//in here f will again become 0;
f();

//ex-3
const boardPassengers=function(n,wait){
    const perGroup=n/3;//it wii get more piority
    setTimeout(function(){
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`There are 3 groups,each with ${perGroup} passengers`);
    },wait*1000)//1000 is mili secound(1 sec);
    console.log(`will start boarding in ${wait} seconds`)//it will run before the 3 sec;
};
// const perGroup=1000;//it will get less piority;
boardPassengers(180,3);


//to check char of ascii value
///////////////////////////////////
let str="surya2002";
let ccc=str.charCodeAt(0);
console.log(ccc+"ascii value");
////////////////////////////////////
//END

