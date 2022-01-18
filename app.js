const cookieContainer = document.querySelector(".cookie-container")
const cookieBtn = document.querySelector(".cookie-btn")

cookieBtn.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout( ()=>{
    if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active")
}, 2000);

document.addEventListener("submit" , (event)=>{
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