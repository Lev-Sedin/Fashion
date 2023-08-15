$(function(){
   
})
const btnOpen = document.querySelector('.modal__btn')
const btnClose = document.querySelector('.modal__close')
const modalWindow = document.querySelector('.modal')
const btnCancel = document.querySelector('.modal__cancel')
console.log(modalWindow)

btnOpen.addEventListener('click', function(){
    modalWindow.style.display = 'flex'
})
btnClose.addEventListener('click',function(){
    modalWindow.style.display = ''
})
btnCancel.addEventListener('click',function(){
    modalWindow.style.display = ''
})