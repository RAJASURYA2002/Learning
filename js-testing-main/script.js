'use strict';


//    const a=function(){
//     document.querySelector('.button').addEventListener('click',function(){
//     const value =document.querySelector('.input').value;
//     document.querySelector('.p').textContent=value;
//     console.log("hi");
// });
// console.log("hi");
//     return value;
//    };
//    console.log(a());
//    const button=document.querySelector('.button').value;
//    console.log(button);
// let a=document.querySelector('.p');
// var x=0;
// let aa;
// const display=function(num){
//    aa={
//     value:1,
    
//    };
//    console.log(aa.value);
//    x++;
// }
// a=document.querySelector('.p');
// console.log(x);
// let a=0;
// let button=document.querySelector('.button');
// button.onclick=function(){
//     a++;
// }
// console.log(a);
// document.querySelector('.button').addEventListener('click',function(){
//        console.log("hi");
//        let a=0;
//        document.querySelector('.one').addEventListener('click',function(){
//         console.log("1");
//           a++;
//      });
//      document.querySelector('.two').addEventListener('click',function(){
//         console.log("2");
//         console.log(a+" i am a");
//      });
//     });

{
   let a=0,b=0;
    document.querySelector('.one').addEventListener('click',function(){
       a=1;
     });
     document.querySelector('.two').addEventListener('click',function(){
        b=2;
         sum();   
     });
    //  document.querySelector('.button').addEventListener('click',function(){
    //     let sum=a+b;
    //     document.querySelector('.input').value=sum;
    //   });
      const sum=function(){
        let sum=a+b;
        document.querySelector('.input').value=sum;
        return sum;
      }
     const fun=sum();
     console.log(fun);
}