const menu = document.querySelector(".menu")
const closes = document.querySelector(".close")
const aside = document.querySelector("aside")

menu.onclick = function() {
    if (menu) {
        aside.classList.remove("hidden")
        menu.classList.add("hidden")
    }
    
}
closes.onclick = function() {
    if (closes) {
        aside.classList.add("hidden")
        menu.classList.remove("hidden")
    }
    
}