let cardsDiv = document.querySelector(".cards");
let isshuCard_api = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

let cardshow =async () =>{
    let url = await fetch(isshuCard_api);
    let res = await url.json();
    console.log(res.data)
    res.data.forEach((e) => {
        let creatAcard = document.createElement("div");
        creatAcard.innerHTML = `            <div class="card">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${e.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3>${e.title}</h3>
                    <p>${e.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${e.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${e.labels[1]}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${e.updatedAt}</p>
                    <p class="">${e.createdAt}</p>
                </div>
            </div>`
            cardsDiv.appendChild(creatAcard)
    })
}
cardshow()