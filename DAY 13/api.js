let demo = async () => {
    let data = await window.fetch('country.json')
    console.log(data);
    let res = await data.json()
    console.log(res);
    //map
    res.map((x) => {
        console.log(x);
        console.log(x.country);
        let select = document.getElementById("select")
        console.log(select);

        select.innerHTML += `<option value = ${x.country}>${x.country}</option>`

        let demo = document.getElementById("demo")
        console.log(demo);
        demo.innerHTML += `<option value = ${x.country}>${x.country}</option>`


    })
}
demo()