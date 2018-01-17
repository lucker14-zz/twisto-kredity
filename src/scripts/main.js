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

// generate separate code
var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
 
var generateWeighedList = function(list, weight) {
    var weighed_list = [];
     
    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;
         
        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }
     
    return weighed_list;
};
 
var list = ['kredit100', 'kredit200', 'kredit300', 'kredit400', 'kredit500'];
var weight = [0.6, 0.15, 0.12, 0.1, 0.03];
var weighed_list = generateWeighedList(list, weight);
 
var random_num = rand(0, weighed_list.length-1);
 
console.log(weighed_list[random_num]);

var my_list = [
    {
        name: 'string',
        code: 'string',
    },{
        name: 'string',
        code: 'string',
    },{
        name: 'string',
        code: 'string',
    },{
        name: 'string',
        code: 'string',
    },{
        name: 'string',
        code: 'string',
    }
]

function setValueToPopup(item){
    var popup_text = document.querySelector('.popup span.green')
    var value = item.substring(item.length - 3, item.length)
    popup_text.innerText = value
}

var all_affected_ctas = [].slice.call(document.querySelectorAll('a.button'))

function setUrlToCtas(input){
    all_affected_ctas.forEach(function(item, index){
        item.src = input
    })
}