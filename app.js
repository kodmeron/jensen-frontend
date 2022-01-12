document.addEventListener("submit" , (event)=>{
    console.log("Submitted")
    event.preventDefault()
})

fetch("http://localhost:3000/" , {})
.then(()=>{})
.catch(()=>{
    console.log("an error occured")
})