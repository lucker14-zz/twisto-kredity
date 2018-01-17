var glasses = [].slice.call(document.querySelectorAll('.glasses__item'))
var popup = document.querySelector('.popup')
var popup_close = document.querySelector('.popup__close')

glasses.forEach(function(item, index){
    item.addEventListener('click', sendToAnimate)
})

popup.addEventListener('click', function(e){
    if (e.target.classList.contains('popup')) {
        hidePopup()
    }
})

popup_close.addEventListener('click', hidePopup)

function sendToAnimate(e){
    animateCoin(e)
}

function showPopup() {
    if (popup.classList.contains('hidden')) 
        popup.classList.remove('hidden');
}

function hidePopup() {
    if (!popup.classList.contains('hidden')) 
        popup.classList.add('hidden')
}

// Animations
function animateCoin(event){
    console.log(event.target)
    var coin = document.querySelector('.coin#' + event.target.id)
    var text = document.querySelector('.glasses__text#' + event.target.id)

    event.target.classList.remove('shaking')
    event.target.classList.add('flipOutY')

    setTimeout(function(){
        event.target.classList.add('coin')
        event.target.classList.remove('flipOutY')
        event.target.classList.add('flipInY')
    }, 500)


    console.log(event.target.id)

    console.log(coin)

    setTimeout(function() {
        showPopup()
    }, 2000)

    glasses.forEach(function(item, index){
        item.removeEventListener('click', sendToAnimate)
        item.addEventListener('click', showPopup)
    })
}