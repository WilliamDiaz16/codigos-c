<script>
   document.write("Hello World!");
   console.log("Hi!") 
var x=100;
var my_variable=32

//this is a single line comment
alert ("This is an alert box!")

/*comentario multilinea */

var num=42;//A number without decimals
var age=18
var name='William';
var text="My name is William"

varsayHello= 'Hola mundo' \'Soy programador de JavaScript.\'';
document.write(sayHello)

var isActive= true;
var isHoliday= false;
console.log("William is cool")

x=42;
console.log(x);

var x=10+5
document.write(x)

var myVAriable =26 % 6;

val1 == val2 // are equal      
val1 != val2 // not equal
val1 < val2 //less than     
val1 === val2//are strict equal (identical)

variable = (condition)? value1: value2

var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
document.write(mystring1 + mystring2);

12 // number
"some text" // string
true // boolean

var myNum1 =7;
var myNum = 10;
if ( myNum1 < myNum2 ) { alert ("JavaScript is easy to learn")}

if ( var1 > var2 )
{document.write("OK")}

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {alert("JavaScript is easy to learn.");}

if (expression) {// executed if condition is true} 
else {// executed if condition is false}

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) { alert("This is my first condition");}
else {alert("This is my second condition");}

var age = 25;
if (age >= 18 ) { alert ("Allowed");}
else {alert("Not allowed");}

var course = 1;
if (course == 1) {document.write("<h1>HTML Tutorial</h1>");} 
else if (course == 2) {document.write("<h1>CSS Tutorial</h1>");} 
else {document.write("<h1>JavaScript Tutorial</h1>");}

var course = 3;
if (course == 1) {document.write("<h1>HTML Tutorial</h1>");} 
else if (course == 2) {document.write("<h1>CSS Tutorial</h1>");}
else {document.write("<h1>JavaScript Tutorial</h1>");}

var status = 1;
var msg;
if(status == 1) {msg = "Online";}
else if(status == 2) {msg = "Away";} 
else {msg = "Offline";}

switch (expression) {case n1: statements break;
case n2: statements break;
default: statements}

var day = 2;
switch (day) {case 1:document.write("Monday");break;
case 2:document.write("Tuesday");break;
case 3:document.write("Wednesday");break;
default:
document.write("Another day");}

var color ="yellow";
switch(color) {case "blue": document.write("This is blue.");break;
case "red": document.write("This is red.");break;
case "green": document.write("This is green."); break;
case "orange": document.write("This is orange."); break;
default: document.write("Color not found.");}

for (i=1; i<=5 i++ ) {document.write (i+ "<br />");}

var i = 1;
for(k=1; k<10;k++) 
{i += k;}

var x = 0;for (; x <= 20; x += 2)
{document.write(x);}

while (condition) {code block }

var i=0;
while (i<=10) {document.write (i + "<br/>"); i++; }

var x = 1;while(x <= 5) 
{document.write(x + "<br />");x = x+ 1;}

var i=20; do { document.write (i+ "br />"); i++;}
while (i<=25);

var count=1;do{document.write("hello <br />");count++;}
while(count<=10);

for (i= 0; i <=10; i++) {if (i == 5 ) {break;} document.write (i + "br/>")}

switch
(day_of_week) {
case 1:
case 2:
case 3:
case 4:
case 5:
    document.write("Working Days");break;
case 6:
    document.write("Saturday");
break;
  default:
    document.write("Today is Sunday");
    break;}

do{document.write(i);i++;}
while(i < 10);

function
test() {/* some code */}

function
hello() {alert("Hi there");}
hello();

function sayHello(name) {alert("Hi, " + name);}
 sayHello("David");
 sayHello("Sarah");
 sayHello("John");

function myAlert(txt) {alert("Hello"+txt);}
myAlert ("Test";)

function sayHello(name, age) {document.write( name + " is " + age + " years old.");}

function sayHello(name, age) {document.write( name + " is " + age + " years old.");}
  sayHello("John", 20)


function myFunction(x, y)
 {alert(x +y);}

function myFunction(a, b) {return a * b;}
var x = myFunction(5, 6); // Return value will end up in x

function addNumbers(a, b) {var c = a+b;return c;}
document.write( addNumbers(40, 2) );

function substrNumbrs(first, second)
{var result = first - second;returnresult;}
document.write(substrNumbrs(10, 5));

var user = prompt (*Please enter your name*)
alert (user);

var name = prompt ("enter your name");
alert (name);

var result = confirm("Do you really want to leave this page?");
if (result == true) {alert("Thanks for visiting");}
else {alert("Thanks for staying with us");}

prompt is for getting input from yhe user;
alert is for displaying a message in a box;

function max(a, b) {if(a >= b)return a;
else return b;}

var person = { name: "John", age:31, favColor:"green",height:183};
var x = person.age;
var y person ['age'];

document.write ("This is some text")

function person(name, age, color) {this.name=name;
    this.age = name;
    this.favColor = color;}

function movie(title,director) {
    this.title= title;
    this.director=director;}

var p1=new person ("John",42,"Green");
var p2=new person ("Amy",21,"Red")

document.write(p1.age); // Outputs 42
document.write (p2.name); //Outputs "Amy"

simba= {category: "lion", gender: "male"}

document.write (simba.category);

var John = {name: "John",age: 25};
var James = {name: "James",age: 21};

function person(name, age) {this.name= name;  this.age = age;this.yearOfBirth = bornYear;}
function bornYear() {return 2016 - this.age;}

function testData(first,second) {this.first= first; this.second =second; this.checkData=mymethod;}

function mathCalc(height, weight) {this.height=height;this.weight=weight;this.sampleCalc=calculate;}

document.write(example[2]);

var courses = ["HTML", "CSS", "JS"];
document.write(courses.length);

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

setInterval(calc,2000);

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

var date = new Date();

var fruits = new Array("pear", "orange","apple", "grapefruit");
alert(fruits[2]);

var date = new Date();alert(
date.getMinutes());

alert (math.PI);

//finds element by id
document.getElementById(id) 
//finds elements by class name
document.getElementsByClassName(name) 
//finds elements by tag name
document.getElementsByTagName(name)

var ob = document.getElementById("text");
ob.innerHTML = "Hi";

<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>

var arr = document.
getElementsByTagName("div");
alert(arr[2].innerHTML);

<img id="myimg" src="orange.png" alt="" />

var el = document.getElementById("myimg");
el.src = "apple.png";

var arr = document.getElementsByTagName("img");
for(var x=0; x<arr.length; x++) {arr[x].src= "demo.jpg";}

var s = document.getElementsByTagName("span");
for(var x=0; x<s.length;x++) {s[x].style.backgroundColor = "#33EA73";}
var node = document.createTextNode("Some new text");


var el =document.createElement  ("li");
var txt=document.createTextNode("B");
el.appendChild(txt);
var ul=document.getElementById("list");
ul.appendChild (el);


var par= document.getElementById("par");
var node= document.getElementById("node")
par.removeChild(node);

<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {pos += 1;box.style.left = pos+"px"; //px = pixels}

function move() {if(pos >= 150) {clearInterval(t);}
else {pos += 1;box.style.left = pos+"px";}}

var x = document.getElementById("demo");
x.onclick = function () {document.body.innerHTML = Date();}

<button onclick="func()">
Click Here
</button>

window.onload ​= function() {
​//some code 
}

<body onload="clear()">
</body>

element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);
function myFunction() {alert("Hello World!");}


addEventListener(event, function, useCapture)
//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);


x.addEventListener("click",func,true);

var images = [
"http://www.sololearn.com/uploads/slider/1.jpg", 
"http://www.sololearn.com/uploads/slider/2.jpg", 
"http://www.sololearn.com/uploads/slider/3.jpg"
];

var arr=['A','B','C'];

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0;
  
function next() {
var slider = document.getElementById("slider");
num++;
if(num >= images.length) {
num = 0;}
slider.src = images[num];
}
  
function prev() {
var slider = document.getElementById("slider");
num--;
if(num < 0) {
   num = images.length-1;
}
slider.src = images[num];
}

function validate() {
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
    return true;
    }
}
alert("The values should be equal and not blank");
return false;}

var arr = document.getElementsByTagName("p");
for(var x=0; x<arr.length; x++) 
{arr[x].innerHTML="SoloLearn";}


var d=document.getElementById("p2");
d.style.color="red";

<button onclick="msg()">Click me</button>
<script>
function msg() {alert("Hi!");}
</script>

<div onmouseover="alert('Hi!');"> put the mouse pointer over me </div>

var a = 10;
const b = 'hello';
let c = true;

if (true) {let name='Jack';}
alert(name); //generates an error

const a = 'Hello'
a='Bye';

const total = 100;

let sum = 0;
for(leti = 0; i < total; i++) {sum += i;}

let n = 6;
let s = 'ES';
let msg = `We are learning ${s + n}!`;
console.log(msg);

let arr=[1,2,3];
for (let k=0;k < arr.length;k++)
{console.log (arr[k]);}

for
(let ch of"SoloLearn") {
console.log(ch);}

const printOdds = (arr) 
=>{arr.forEach(el=> {
if (el % 2 != 0) console.log(el);});}

let car = {speed:40, accelerate (){this.speed +=10;}
};
car.accelerate();
car.accelerate();

let prop = 'foo';
let o = {
[prop]: 'lol',['b' + 'ar']:'123'};

let arr =['1','2','3'];
let [one,two,three]=arr;

console.log(one);//1
console.log (two) //2
console.log (three); //3

let obj = {h:100, s: true}
let {h,s}=obj;

console.log (h); // 100
console.log(s); // true

function containsAll(arr) {
for (let k = 1; k < arguments.length; k++) {
    let num = arguments[k];
    if (arr.indexOf(num) === -1) {
    return false;}
    }
    return true;}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));

function containsAll(arr, ...nums) {
for (let num of nums) {
    if (arr.indexOf(num) === -1) {
    return false;}
    }
    return true;}

function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
    }
    var args = [1, 2, 3];
    myFunction.apply(null, args.concat(4));

class Rectangle {
    constructor(height, width) {this.height = height;this.width = width;}
    }

class Point {constructor(a, b) {this.x = a;this.y = b;}
getX() { return this.x; }
getY() { return this.y; }
}
  
class Rectangle {constructor(height, width) {this.height = height;this.width = width;}
get area() {return this.calcArea();}
calcArea() {return this.height * this.width;}
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25

class Dog {constructor(name) {this.name = name}
bark() {
console.log(this.name+ ' barks.');}
}
let d = new Dog('Rex');d.bark();

class Animal {constructor(name) {
    this.name = name;}
    speak() {console.log(this.name + ' makes a noise.');}
  }
class Dog extends Animal {speak() {console.log(this.name + ' barks.');}
  }
let dog = new Dog('Rex');
dog.speak();

class Human {constructor(name) {this.name = name;}
}
class Student extends Human {constructor(name, age) {super(name);this.age = age;}
}

const set = new Set();set.add(1).add(2).add (3);
for(let v of set.values())console.log(v);

function foo() {
return new Promise((resolve, reject) => {let result = getSomeResult();if (result)resolve('Success');else reject('Something went wrong');});}

let myIterableObj = { 
[Symbol.iterator] : function* () {
yield 1; yield 2; yield 3;...
console.log([...myIterableObj]);

// lib/math.js
export ​let sum = (x, y) => { return x + y; }
export ​let pi = 3.14
// app.j
import * ​as math from "lib/mat"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)

import* as calc from "util/calc";
calc.hit(1, 2, calc.degree);

const num = 5;
const calc = (x, y, z = num) =>
 {return x + y + z;}

const arr1= [1, 2, 3];
const arr2 = [5, 6, 7, 8];
 let arr3 = [
 ...
 arr1, 
 4
 , ...arr2];
 
const user = {name: 'David',age: 28,id: 1234};
let newUser = Object.assign({},{name,age} =user,
{id: 9999});console.log(newUser);


let myMap = new Map();myMap.set('zero', 0);
myMap.set('one', 1);for(let [key, value] of myMap) {
console.log(`${key} = ${value}`);}

</script>