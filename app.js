const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})
        return cookies[key]
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`
    }
}

const storageType = cookieStorage
const consentPropertyName = 'jdc_consent'

const shouldShowPopup = () => !storageType.getItem(consentPropertyName)
const saveToStorage = () => storageType.setItem(consentPropertyName, true)


const cookieContainer = document.querySelector(".cookie-container")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed"))
        cookieContainer.classList.add("active")
}, 2000);


window.onload = () => {
    if (shouldShowPopup()) {
        const consent = confirm(cookieBtn)
        if (consent) {
            saveToStorage()
        }
    }
}

fetch("http://localhost:3000/" , {})
.then(()=>{})
.catch(()=>{
    console.log("an error occured")
})

document.addEventListener("submit", (event) => {
    console.log("Validating")
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;



    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/authorize");
    //request.send(new FormData(formElement));
    console.log("Validated")

    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`user=${user}&password=${password}`);

    event.preventDefault()
})