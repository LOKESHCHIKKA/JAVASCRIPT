let a = document.createElement("h1")
console.log(a)
a.textContent = "Hello-World"

let b = document.body.appendChild(a)

a.style.backgroundColor = "blue"

let div = document.createElement("div")
console.log(div);

//append div-tag to body-tag
document.body.appendChild(div)
div.style.border = "5px solid"

//create a ol-tag
let ol = document.createElement("ol")
console.log(ol);

//append ol tag to div
div.appendChild(ol)

//create a li-tag
let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "REACT"

//append li-tag to ol-tag
ol.appendChild(li1)
ol.setAttribute("type", "1")


//create a li-tag
let li2 = document.createElement("li")
console.log(li2);
li2.textContent = "NODE JS"

//append li-tag to ol-tag
ol.appendChild(li2)
ol.setAttribute("type", "A")
