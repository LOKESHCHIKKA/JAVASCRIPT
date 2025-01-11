let main = function()
{
    let a = Number(prompt("Enter a value"))
    let b = Number(prompt("Enter b value"))
    let c = Number(prompt("Enter c value"))
    let d = a + b + c
    console.log(d);
    let e = a - b - c
    console.log(e);
    let f = a * b * c
    console.log(f)

    if(a >= b && a >= c)
    {
        console.log("a is the largest");
    }
    else if(b >= a && b >= c)
    {
        console.log("b is the largest");
    }
    else{
        console.log("c is the largest");
    }
}
main()