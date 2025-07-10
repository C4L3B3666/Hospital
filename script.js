const menu = document.getElementById("menu");
const menuHamburguer = document.getElementById("menu_hamburguer")

menuHamburguer.addEventListener("click", ()=> {
    menu.classList.toggle("ativo")
})