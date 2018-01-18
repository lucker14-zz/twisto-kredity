var glasses = [].slice.call(document.querySelectorAll('.glasses__item'))
var popup = document.querySelector('.popup')
var popup_close = document.querySelector('.popup__close')
var weight = ['0.01','0.01','0.03','0.04','0.05','0.05','0.06','0.06','0.06','0.06','0.06','0.06','0.06','0.09','0.12','0.16','0.01','0.01'];


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

var my_list=[{name:"100",code:"TF75PSM",icon:"beer"},{name:"110",code:"6REL6IH",icon:"beer"},{name:"120",code:"N72XR8Q",icon:"beer"},{name:"130",code:"46A24H7",icon:"beer"},{name:"140",code:"S0NLEU5",icon:"beer"},{name:"150",code:"EZG59M4",icon:"beer"},{name:"160",code:"DOK9WWM",icon:"wine"},{name:"170",code:"OABVHME",icon:"wine"},{name:"180",code:"MI7HD9Q",icon:"wine"},{name:"190",code:"MNNUB0M",icon:"wine"},{name:"200",code:"0ZP8F80",icon:"wine"},{name:"225",code:"6M2J3JT",icon:"wine"},{name:"250",code:"77W3UO1",icon:"wine"},{name:"300",code:"87D047M",icon:"wine"},{name:"450",code:"ELJQ6IY",icon:"champagne"},{name:"500",code:"TIZ8A0Z",icon:"champagne"},{name:"750",code:"TKQIXS4",icon:"champagne"},{name:"1000",code:"HHWRC1R",icon:"champagne"}];

function hidePopup() {
    if (!popup.classList.contains('hidden')) 
        popup.classList.add('hidden')
}

// Animations
function animateCoin(event){
    // generate code and save it
    var code = generateCode()
    setPromoCookie(code)
    setTimeCookie()

    console.log(code)

    // set info to frontend
    var code_item = getItemWithCode(code)
    var drink = document.querySelector('span.drink')
    var count = document.querySelector('span.count')
    var text = ''

    if (code_item.icon == 'wine') {
        text = 'víno'
    } else if (code_item.icon == 'beer'){
        text = 'pivo'
    } else if (code_item.icon == 'champagne'){
        text = 'šampaňské'
    }

    drink.innerText = text
    count.innerText = code_item.name

    console.log(code_item)
    setValueToPopup(code_item.name)
    setUrlToCtas(code_item.code)

    // all of the below needs replacement
    console.log(event.target)

    event.target.classList.remove('shaking')
    event.target.classList.add('flipOutY')

    setTimeout(function(){
        event.target.classList.add(code_item.icon)
        event.target.classList.remove('flipOutY')
        event.target.classList.add('flipInY')
    }, 500)


    console.log(event.target.id)

    setTimeout(function() {
        showPopup()
    }, 2500)

    glasses.forEach(function(item, index){
        item.removeEventListener('click', sendToAnimate)
        item.addEventListener('click', showPopup)
    })
}

function getHref(href, promo) {
  return href + (href.indexOf('/?') !== -1 ? "&" : "?") + "promo=" + promo;
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
 
var list = ['TF75PSM','6REL6IH','N72XR8Q','46A24H7','S0NLEU5','EZG59M4','DOK9WWM','OABVHME','MI7HD9Q','MNNUB0M','0ZP8F80','6M2J3JT','77W3UO1','87D047M','ELJQ6IY','TIZ8A0Z','TKQIXS4','HHWRC1R'];

function setValueToPopup(item){
    var popup_text = document.querySelector('.popup span.green')
    popup_text.innerText = item
}

var all_affected_ctas = [].slice.call(document.querySelectorAll('a.button'))

function setUrlToCtas(input){
    // all_affected_ctas.forEach(function(item, index){
    //     item.src = input
    // })

    $('[href*="/registrace/"]').each(function() {
        var $href = $(this),
            href =  $href.attr('href');
      $href.attr('href', getHref(href, input));
      // $('.result').append(getHref(href, input) + "<br>");
    });
}

function generateCode(){
    var weighed_list = generateWeighedList(list, weight);
    var random_num = rand(0, weighed_list.length-1);
    return weighed_list[random_num];
}

function getItemWithCode(value){
    console.log('input')
    console.log(value)
    console.log('type input')
    console.log(typeof(value))
    var ret = ''
    my_list.forEach(function(item, index){
        console.log('value and comparison')
        console.log(item.code)
        console.log(item.code == value)
        console.log('type item')
        console.log(typeof(item.code))
        if (item.code == value) {
            ret = item
        }
    })
    return ret
}

function setPromoCookie(string){
    window.localStorage.setItem('aZxYujkL', string)
}

function setTimeCookie(){
    var date_now = new Date()
    window.localStorage.setItem('xcKyUlV', date_now)
}

function getPromoCookie(){
    return window.localStorage.getItem('aZxYujkL')
}

function getTimeCookie(){
    return window.localStorage.getItem('xcKyUlV')
}

function recoverState(){
    var saved = getPromoCookie()
    var item_to_work_with = getItemWithCode(saved)
    var first_glass = document.querySelector('.glasses__img#wine')

    // set new urls
    setUrlToCtas(item_to_work_with.code)

    // set popup text
    setValueToPopup(item_to_work_with.name)

    var drink = document.querySelector('span.drink')
    var count = document.querySelector('span.count')
    var text = ''

    if (item_to_work_with.icon == 'wine') {
        text = 'víno'
    } else if (item_to_work_with.icon == 'beer'){
        text = 'pivo'
    } else if (item_to_work_with.icon == 'champagne'){
        text = 'šampaňské'
    }

    drink.innerText = text
    count.innerText = item_to_work_with.name

    // animate or just set one active item
    first_glass.classList.remove('shaking')
    first_glass.classList.add('flipOutY')

    setTimeout(function(){
        first_glass.classList.add(item_to_work_with.icon)
        first_glass.classList.remove('flipOutY')
        first_glass.classList.add('flipInY')
    }, 500)

    // clean handlers for generating
    glasses.forEach(function(item, index){
        item.removeEventListener('click', sendToAnimate)
        item.addEventListener('click', showPopup)
    })
}

(function(){
    var time_cookie = Date.parse(getTimeCookie())
    console.log(time_cookie)
    console.log(typeof(time_cookie))
    var now = new Date()
    console.log(now)
    console.log(typeof(now))
    var diff = 24*60*60*1000
    console.log(diff)

    console.log(now-time_cookie)

    if ((now - time_cookie) < diff) {
        recoverState()
    }
})()