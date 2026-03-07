let cardsDiv = document.querySelector(".cards");
let isshuCard_api = "https://phi-lab-server.vercel.app/api/v1/lab/issues";


let cardshow = async () => {
    let url = await fetch(isshuCard_api);
    let res = await url.json();

    document.querySelector(".manage-info h3 span").innerText = res.data.length;

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
                        <span class="bug bug-2"><i class="ri-file-info-fill"></i> ${e.labels[1] ? e.labels[1] : "error"}</span>
                    </div>
                </div>
                <!-- s-3 -->
                <div class="s-3">
                    <p class="">#${e.updatedAt}</p>
                    <p class="">${e.createdAt}</p>
                </div>
            </div>`
        cardsDiv.appendChild(creatAcard)
        
        // fuilter red
       
    })
}

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
        cardsDiv.innerHTML += `            <div class="card">
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
    })

}

// closed function
async function closefunc() {
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
        cardsDiv.innerHTML += `            <div class="card-red">
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
    })

}