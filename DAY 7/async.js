function main(m,n)
{
    setTimeout(() => {
        for(let i=m;i<=n;i++)
            {
                console.log(i);
            }
    },5000)
}
// main(1,10)
main(1,"10a")

function demo()
{
    console.log("no's printed")
}
demo()


//WINDOW

window.setTimeout(() =>{
    console.log("I am setTimeout");
},5000)

window.setInterval(() => {
    console.log("I am setInterval");
},3000)