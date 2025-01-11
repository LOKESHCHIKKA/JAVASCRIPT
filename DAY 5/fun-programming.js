let main = function (task)
{
    console.log(task(10 , 10));
}
main(function(a,b){
    return a + b
})
main(function(a,b){
    return a -  b
})
main(function(a,b){
    return a * b
})
main(function(a,b){
    return a / b
})
main(function(a,b){
    return a ||  b
})
main(function(a,b){
    return a % b
})

let assignment = (a, b, task) => {
    console.log(task(a,b));
}
assignment(a = Number(prompt("Enter a value")),
        b = Number(prompt("Enter b value")),
    (a, b) => {
            return a + b
        })
assignment(a = Number(prompt("Enter a value")),
        b = Number(prompt("Enter b value")),
    (a, b) => {
            return a - b
        })
assignment(a = Number(prompt("Enter a value")),
        b = Number(prompt("Enter b value")),
    (a, b) => {
            return a * b
        })
assignment(a = Number(prompt("Enter a value")),
        b = Number(prompt("Enter b value")),
    (a, b) => {
            return a / b
        })