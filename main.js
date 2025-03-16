const btn = document.querySelector("#butto");
const box = document.querySelector("#card .card__content");

async function renderMap(){
    try{
        const res = await fetch("https://ipinfo.io/json");
        const data = await res.json();
        box.innerHTML = `
            <p><strong>Ip:</strong> ${data.ip}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Region:</strong> ${data.region}</p>
            <p><strong>Country:</strong> ${data.country}</p>
            <p><strong>Timezone:</strong> ${data.timezone}</p>
        `;
    } catch(error) {
        console.error("Error fetching data:", error);
    }
}

btn.addEventListener("click", renderMap);
