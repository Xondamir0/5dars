const btn = document.querySelector("#butto");
const box = document.querySelector("#card")

async function renderMap(){
    try{
        const res = await fetch("https://ipinfo.io/json")
        const data = await res.json();
        box.innerHTML = 
        `
        <strong>Ip : ${data.ip} /strong>
        <strong>City : ${data.city} /strong>
        <strong>Region : ${data.region} /strong>
        <strong>Country : ${data.country} /strong>
        <strong>timezone : ${data.timezone} /strong>
        `
    }

    catch(error){
        console.error("Error fetching data:", error)
        return;
    }
}

btn.addEventListener("click", ()=> {
    renderMap();
})