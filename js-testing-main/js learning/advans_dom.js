"use strict";
// selecting,creating,and deleting elements
console.log(document.documentElement);
console.log(document.head);
//*
// document.querySelectorAll();//it will return NodeList
//if we manullay delete it ,it will not delete in main page

// document.getElementsByTagName();//it will return HTMLCollection
//if we manullay delete it ,it will delete in main page
//

// document.getElementsByClassName();//it is same as document.getElementsByTagName();
//*

// document.getElementsByTagName();//only can use for id class
// document.getElementsByTagName();
//its is use to select all tags name like <button>...

//Creating and inserting elements

//.insertAdjacentHTML
const body = document.querySelector("body");
const message = document.createElement("div"); //it will create a tag
message.classList.add("cookie-message"); //it will create a class
message.textContent = "we use cookie!..."; //it will add the value to the element;

// body.prepend(message);//it will add first of the body
body.append(message); //it will add last of the body

//we can use only either prepend/append;

//to achive to use both we can use clone
// body.append(message.cloneNode(true));

// body.before(message);//it will before /above the body
// body.after(message);//it will after /down/below the body

//remove
document.querySelector(".btn").addEventListener("click", function () {
  message.remove();
});

//style,attributes and classes

//Style//
message.style.color = "red";
//all the css value are inserted in the inline element
console.log(message.style.color);
//Note:it will work only if we create in js
//to achive all the style
// console.log(getComputedStyle(message));//it will display all the css value which is also include by the browser defalut
//to get element
console.log(getComputedStyle(message).color);

//we can increase the size here itself
console.log(getComputedStyle(message).fontSize); //before 16px;
message.style.fontSize =
  Number.parseFloat(getComputedStyle(message).fontSize, 10) + 20 + "px";
console.log(getComputedStyle(message).fontSize); //after 36px;

//using root elements

//to change root elements in css

// document.documentElement.style.setProperty('var_name','red');

//attributes

// const logo=document.querySelector('.class_name');
// console.log(logo.src);
// console.log(logo.className);

// to return user creade attributes
// console.log(logo.getAttribute('designer'));
// console.log(logo.setAttribute('name',"surya"));

// to change the value
// localStorage.alt="xyz";
// /*
//link
// const link=document.querySelector('.link');
// console.log(link.href);//it will full url enter with server url

// console.log(link.getAttribute('href));//it will return url
// /*

// classes
// local.classList.add();
// local.classList.remove();
// local.classList.toggle();
// local.classList.contains();

//types of eventslisners//
const h1=document.querySelector('h1');
const remove=function (e) {
    alert("hi");
    h1.removeEventListener('mouseenter',remove);
  }
h1.addEventListener("mouseenter", remove);


//Event propagation:bubbling and Capturing//
//see it in ep:190,191;
//important//
const radomInt=(min,max)=>{
   return Math.floor(Math.random()*(max-min+1)+min);
}
const radomColor=()=>`rgb(${radomInt(0,255)},${radomInt(0,255)},${radomInt(0,255)})`;

console.log(radomInt(0,255));
const link1=document.querySelector('.l_1');
const link2=document.querySelector('.l_2');
const link3=document.querySelector('.l_3');
link1.addEventListener('click',function(e)
{
this.style.backgroundColor=radomColor();
console.log(radomColor());
// e.stopPropagation();
});
link2.addEventListener('click',function(e)
{
this.style.backgroundColor=radomColor();
});
link3.addEventListener('click',function(e)
{
this.style.backgroundColor=radomColor();
});


// event delegation//
//bank project smooth scrolling in nav

//DOM TRAVERSING//
//going downwards:chlid
const h11=document.querySelector('h1');
console.log(h1.querySelector('.highlight'));//here h1 is is the main tag ot that the child class are span elements class is highlight can be selected;
console.log(h11.childNodes);//it will specify all in the h1 tags(words type);
console.log(h11.children);//it will print the elements in the class

//we can also select the elements
// h11.firstElementChild.style.color="red";
// h11.lastElementChild.style.color="red";

//going upwards:chlid
console.log(h11.parentNode);//it will select the child node of the parent(in node);
console.log(h11.parentElement);

// h11.closest('.header').style.background='red';//in here we can use root color property in css;
//closest will find parent in the dom tree it dose matter how far
//querySelector it will find both parrent and child

//going sideways:siblings
console.log(h11.previousElementSibling);//it will check the previous child elements in h1;
console.log(h11.nextElementSibling);//it will check the next child elements in h1;

console.log(h11.previousSibling);
console.log(h11.nextSibling);
//it will check the node//its not important
console.log(h11.parentElement.children);//it will print all the child node which is above and below

//BUlDING A TABBED COMPONENT

