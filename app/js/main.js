

const menu = () =>{
    const btnOpen = document.querySelector('.btn-contact')
    const btn = document.querySelector(".btn")
    const nav = document.querySelector(".nav-menu__mobile")
    const linkOne = document.querySelector(".link-one")
    const linkTwo = document.querySelector(".link-two")
    const btnClosed = document.querySelector(".btn-closed")


    btnOpen.addEventListener('click', function(){
        btn.classList.add("btn-contact__unactive")
        nav.classList.add("nav-menu__mobile-active")
        linkOne.classList.add("link-unactive__one")
        linkTwo.classList.add("link-unactive__two")
    })
    btnClosed.addEventListener("click", function(){
        nav.classList.remove("nav-menu__mobile-active")
        linkOne.classList.remove("link-unactive__one")
        linkTwo.classList.remove("link-unactive__two")
        btn.classList.remove("btn-contact__unactive")
    })
}

menu() //паралакс