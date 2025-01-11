let a = function()
{
    return "Hello, World!";
}
console.log(a);
console.log(a())

let b = function(a)
{
    console.log(a);
    console.log(arguments[1])
    console.log(arguments[2])
}
b(10 , 20 , 30)