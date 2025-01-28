let obj = {
    "name": "Lokesh",
    "age": 21,
    "city": "Khammam"
}
console.log(obj);

let obj1 = JSON.stringify(obj)
console.log(obj1);

let obj2 = JSON.parse(obj1)
console.log(obj2);

// 3 -ways to access JSON
//fetch() method
//AJAX
//Axios

// let a = window.fetch()
// console.log(a);

window.fetch("data.json")
.then((data) => data.json())
.then((res) => {
    console.log(res);
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
    console.log(res[3]);
})

res.map((x) => {
    console.log(x);
    console.log(x.name);
    console.log(x.id);
    console.log(x.clg);
    document.body.innerHTML += `<h1>${x}</h1>`
    document.body.innerHTML += `<h1>${x.name}</h1>`
    document.body.innerHTML += `<h1>${x.id}</h1>`
    document.body.innerHTML += `<h1>${x.clg}</h1>`
    document.body.innerHTML += `<img src ="${x.image}" alt="Image">`
})