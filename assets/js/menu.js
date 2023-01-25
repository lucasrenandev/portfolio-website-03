// Responsive menu
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".nav-list")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", function() {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})