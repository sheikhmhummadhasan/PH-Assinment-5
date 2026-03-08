let cardsDiv = document.querySelector(".cards");
let loder = document.querySelector("#loder")
let isshuCard_api = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

function loading_on() {
    loder.classList.remove("hidden")
}

function loading_off() {
    loder.classList.add("hidden")
}

let cardshow = async () => {
    loading_on()
    cardsDiv.innerHTML = "";
    let url = await fetch(isshuCard_api);
    let res = await url.json();

    document.querySelector(".manage-info h3 span").innerText = res.data.length;

    // filter the closed card
    let close = res.data.filter((c) => {
        return c.status === "closed"
    })
    close.forEach((c) => {
        // console.log(c)
        let creatAcard = document.createElement("div");
        creatAcard.innerHTML = `<div onClick="for_close_model(${c.id});" class="card-red z">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${c.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3 class="font-bold text-xl">${c.title}</h3>
                    <p>${c.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${c.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${c.labels[1] ? c.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${c.updatedAt}</p>
                    <p class="">${c.createdAt}</p>
                </div>
            </div>`
        cardsDiv.appendChild(creatAcard)
    })

    // filter the open card
    let open = res.data.filter((o) => {
        return o.status === "open"
    })
    open.forEach((o) => {
        let creatAcard = document.createElement("div");
        creatAcard.innerHTML = `<div onClick="for_open_model(${o.id})" class="card z">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${o.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3>${o.title}</h3>
                    <p>${o.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${o.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${o.labels[1] ? o.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${o.updatedAt}</p>
                    <p class="">${o.createdAt}</p>
                </div>
            </div>`
        cardsDiv.appendChild(creatAcard)
    })
    loading_off()
}
cardshow()

// toggoling btn
let tgl_btns = document.querySelectorAll(".b")
tgl_btns.forEach((t) => {
    t.addEventListener("click", () => {
        tgl_btns.forEach((btn) => {
            btn.classList.remove("toggel")
            btn.classList.add("btn-2")
        })
        // console.log(t)
        t.classList.remove("btn-2")
        t.classList.add("toggel")
    })

})

// login interface
function loginInterface() {
    let main = document.querySelector(".main")
    let login = document.querySelector(".login-interface");
    let input_username = document.querySelector("#username");
    let input_password = document.querySelector("#password");
    let login_btn = document.querySelector(".primery-btn");

    login_btn.addEventListener("click", () => {
        let user = input_username.value;
        let pass = input_password.value;
        // console.log(user,pass)
        if (user === "admin" && pass === "admin123") {
            login.classList.add("hidden");
            main.classList.remove("hidden")
        } else {
            alert("Wrong username or password")
        }
    })
}
loginInterface()

// open function
async function openFunc() {
    loading_on()
    cardsDiv.innerHTML = ''
    let stsatus = document.querySelector(".manage-info h3 span")

    let url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    let res = await fetch(url);
    let prom = await res.json();

    let s = prom.data.filter((elem) => {
        return elem.status === "open"
    })
    stsatus.innerHTML = s.length
    s.forEach((f) => {
        cardsDiv.innerHTML += `<div onClick="for_open_model(${f.id})" class="card z">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${f.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3>${f.title}</h3>
                    <p>${f.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${f.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${f.labels[1] ? f.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${f.updatedAt}</p>
                    <p class="">${f.createdAt}</p>
                </div>
            </div>`
        // console.log(f)
        loading_off()
    })

}

// closed function
async function closefunc() {
    loading_on()
    cardsDiv.innerHTML = ''
    let stsatus = document.querySelector(".manage-info h3 span")

    let url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    let res = await fetch(url);
    let prom = await res.json();

    let s = prom.data.filter((elem) => {
        return elem.status === "closed"
    })
    stsatus.innerHTML = s.length
    s.forEach((g) => {
        cardsDiv.innerHTML += `<div onClick="for_close_model(${g.id});" class="card-red z">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${g.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3>${g.title}</h3>
                    <p>${g.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${g.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${g.labels[1] ? g.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${g.updatedAt}</p>
                    <p class="">${g.createdAt}</p>
                </div>
            </div>`
        // console.log(g)
        loading_off()
    })

}

// search interface
function search() {
    let search_input = document.querySelector("#search-input");
    let searchValue = search_input.value;

    let url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`

    let fecting = async () => {
        loading_on()
        cardsDiv.innerHTML = "";
        let res = await fetch(url);
        let prom = await res.json()

        let stsatus = document.querySelector(".manage-info h3 span");
        stsatus.innerHTML = prom.data.length;

        prom.data.forEach((s) => {
            let creatAcard = document.createElement("div");
            creatAcard.innerHTML = `<div onClick="for_close_model(${s.id});" class="card">
                <!-- s-1 -->
                <div class="s-1">
                    <img src="./assets/Open-Status.png" alt="">
                    <span>${s.priority}</span>
                </div>
                <!-- s-2 -->
                <div class="s-2">
                    <h3>${s.title}</h3>
                    <p>${s.description}</p>
                    <div class="bugs"> 
                        <span class="bug bug-1"><i class="ri-bug-fill"></i> ${s.labels[0]}</span>
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${s.labels[1] ? s.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${s.updatedAt}</p>
                    <p class="">${s.createdAt}</p>
                </div>
            </div>`
            cardsDiv.appendChild(creatAcard)
        })
        loading_off()
    }
    fecting()

}



function modalOff() {
    let modal_container = document.querySelector(".modal-container");
    modal_container.style.display = "none";
}

let for_modalGettheCards = document.querySelector(".cards");
function modal_data_update() {
    for_modalGettheCards.addEventListener("click", (e) => {
        let modal_container = document.querySelector(".modal-container");
        let card = e.target.closest(".card, .card-red");

        if (card) {
            modal_container.style.display = "flex"
        }
    })
}

modal_data_update()



function for_close_model(d) {
    let url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${d}`
    let fetching = async () => {
        let res = await fetch(url);
        let prom = await res.json()
        // console.log(prom)
        let modal = document.querySelector(".modal");
        modal.innerHTML = ` <h1>${prom.data.title}</h1>
                <!-- open box -->
                <div class="opened-box">
                    <span id="Open">${prom.data.status}</span>
                    <p>by ${prom.data.author}</p>
                    <p>${prom.data.updatedAt}</p>
                </div>
                <!-- ststus -->
                <div class="marge bugs">
                    <span class=" bug-1"><i class="ri-bug-fill"></i> ${prom.data.labels[0]}</span>
                    <span class="bug-2"><i class="ri-file-info-fill"></i> ${prom.data.labels[1] ? prom.data.labels[1] : "error"}</span>                </div>
                <!-- description -->
                <p class="discription">${prom.data.description}</p>
                <!-- sign by -->
                 <div class="proi">
                    <div class="box-m-1">
                        <p>Assin By</p>
                        <h3>${prom.data.assignee}</h3>
                    </div>
                    <div class="box-m-2">
                        <p>Priorety</p>
                        <span>${prom.data.priority}</span>
                    </div>
                 </div>
                 <div class="close-box"><button onclick="modalOff()" class="modal-close-btn">Close</button></div>`
    }
    fetching()
    // console.log(d)
}
function for_open_model(f) {
    let url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${f}`
    let fetching = async () => {
        let res = await fetch(url);
        let prom = await res.json()
        // console.log(prom)
        let modal = document.querySelector(".modal");
        modal.innerHTML = ` <h1>${prom.data.title}</h1>
                <!-- open box -->
                <div class="opened-box">
                    <span id="Open">${prom.data.status}</span>
                    <p>by ${prom.data.author}</p>
                    <p>${prom.data.updatedAt}</p>
                </div>
                <!-- ststus -->
                <div class="marge bugs">
                    <span class=" bug-1"><i class="ri-bug-fill"></i> ${prom.data.labels[0]}</span>
                    <span class="bug-2"><i class="ri-file-info-fill"></i> ${prom.data.labels[1] ? prom.data.labels[1] : "error"}</span>                </div>
                <!-- description -->
                <p class="discription">${prom.data.description}</p>
                <!-- sign by -->
                 <div class="proi">
                    <div class="box-m-1">
                        <p>Assin By</p>
                        <h3>${prom.data.assignee}</h3>
                    </div>
                    <div class="box-m-2">
                        <p>Priorety</p>
                        <span>${prom.data.priority}</span>
                    </div>
                 </div>
                 <div class="close-box"><button onclick="modalOff()" class="modal-close-btn">Close</button></div>`
    }
    fetching()
    // console.log(f)
}



