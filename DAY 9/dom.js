console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title="AMAZON"
console.log(document.body);

let link = document.links
console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);
// console.log(link[3]);

for(let i=0; i<link.length; i++)
{
    console.log(link[i]);
    link[i].className = "demo"
    link[i].href = "https://www.youtube.com"
    link[i].target = "_blank"
}

//in-direct access (methods in dom)
// 1)document.getElementById("value")
// 2)document.querySelector("value")
// 3)document.querySelectorAll("value")
// 4)document.getElementsByClassName("value")
// 5)document.getElementsByTagName("value")
// 6)document.getElementsByName("value")


let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "AMAZON"
console.log(a.textContent);
a.style.backgroundColor = "orange"
a.style.textAlign = "center"


let  b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "green"
b[0].style.textAlign = "center"

console.log(b[1]);

let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color = "red"
c[1].textContent = "hello"

let d= document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor = "crimson"
console.log(document.body.classNodes);

//document.querySelector
//-->we have pass value with css symbol.
//-->will return reference of first-element.


let e = document.querySelector('#demo') 
console.log(e);

let e1 = document.querySelector('.demo1')
console.log(e1);

//document.querySelectorAll
//-->we have pass value with css symbol.
//-->will return reference in a node-list.

let f = document.querySelectorAll('#demo')
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll('.demo1')
console.log(f1);
console.log(f1[0]);

//events in dom
//-----------------------
//-->it is an action performed b y end-user on a web-page

//types:-
//1)pointer event
    // click event
//2) key-board event
    // keydown
    // keyup
    // keypress
//3) mouse event
    // mouseover
    // mouseout/mouseleave
    // mousemove
    // dbclick
//4) form event
    // blur
    // focus
    // load
    // input
//5) window event
// scroll   
