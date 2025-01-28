function demo()
{
    console.log("Hello World")
}
demo()

let a = document.getElementById("demo1")
console.log(a);

a.onclick = function(colors) {
    console.log(colors);

    let res = Math.round(Math.random() * 10000)
    console.log(res);

    let res1 = Math.round(Math.random() *10000).toString(16)
    console.log(res1);

    document.body.style.backgroundColor =  `#${res1}`
}

let demo2 = document.getElementById("demo2")
console.log(demo2)

let color = window.prompt("Enter Color Name")
console.log(color);

demo2.innerHTML = color

demo2.onmouseenter = () => {
    document.body.style.backgroundColor = `${color}`
    document.body.style.transition = "ease all 3s"
}

let demo3 = document.getElementById("demo3")
console.log(demo3);

demo3.addEventListener("click" , () => {
    let demo4 = document.getElementById("demo4").value
    console.log(demo4);
    let speech = new SpeechSynthesisUtterance
    console.log(speech);
    speech.text = demo4
    speechSynthesis.speak(speech)
})