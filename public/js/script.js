const navToggle = document.querySelector("#nav-toggle")
const navMenu = document.querySelector("#nav-menu")
const outsideNavToggle = document.querySelector("#nav-outside-toggle")
let toggle = false

navToggle.addEventListener("click", () => {
    toggle = !toggle
    if(toggle){
        navMenu.classList.add("scale-y-100")
        outsideNavToggle.classList.add("inset-0")
    }else{
        navMenu.classList.remove("scale-y-100")
        outsideNavToggle.classList.remove("inset-0")
    }
})

outsideNavToggle.addEventListener("click", () => {
    toggle = !toggle
    if(toggle){
        navMenu.classList.add("scale-y-100")
        outsideNavToggle.classList.add("inset-0")
    }else{
        navMenu.classList.remove("scale-y-100")
        outsideNavToggle.classList.remove("inset-0")
    }
})
