const buton1 = document.getElementById("button_1")
const buton2 = document.getElementById("button_2")
const buton3 = document.getElementById("button_3")
buton1.addEventListener("click", (e)=>{
    alert(`Клікнуто на кнопці: ${e.target.innerText}`)
})
buton2.addEventListener("click", (e)=>{
    alert(`Клікнуто на кнопці: ${e.target.innerText}`)
})

buton3.addEventListener("click", (e)=>{
    alert(`Клікнуто на кнопці: ${e.target.innerText}`)
})

