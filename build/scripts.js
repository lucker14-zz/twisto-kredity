var glasses = [].slice.call(document.querySelectorAll('.glasses__item'))
var popup = document.querySelector('.popup')
var popup_close = document.querySelector('.popup__close')

glasses.forEach(function(item, index){
    item.addEventListener('click', showPopup)
})

popup.addEventListener('click', function(e){
    if (e.target.classList.contains('popup')) {
        hidePopup()
    }
})

popup_close.addEventListener('click', hidePopup)

function showPopup() {
    if (popup.classList.contains('hidden')) 
        popup.classList.remove('hidden')
}

function hidePopup() {
    if (!popup.classList.contains('hidden')) 
        popup.classList.add('hidden')
}