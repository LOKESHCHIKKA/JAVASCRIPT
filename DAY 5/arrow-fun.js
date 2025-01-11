//implict
let a = () => console.log("hello")
console.log(a);
a()
//explict
let b = () => { return "hello" }
console.log(b);
console.log(b());
//ex
let main = (task) => {
    console.log(task);
    console.log(task());
}
main(()=>{
    return "I am lokesh" 
})