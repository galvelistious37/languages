function setPhraseArr(){
    for(let key of dictionary.keys()){
        phrase.push(key);
    }
     return phrase;
}

function setCardValues(){
    $("#phrase").animate({opacity: 0});
    $("#def").animate({opacity: 0}, function(){
        displayPhrase();
        setDefinition();
    });
}

function displayPhrase(){
    $("#phrase").animate({opacity: 1}).text(phrase[index]);
}

function setDefinition(){
    $("#def").text(dictionary.get(phrase[index]));
}

function isMore(){
    return index < phrase.length - 1;
}

function setModuleTitle(title){
    $("#mod-title").text(title)
}

function reset(arr){
    dictionary.clear();
    phrase.splice(0, phrase.length);
    index = 0;
}

function doTheSlides(selector){
    $(selector).hide().slideDown();
}

let dictionary = new Map();
let phrase = [];
let index = 0;

$("#definition").on("click", function(){
    $("#def").animate({opacity: 1})
})

$("#next").on("click", function(){
    if(!isMore()){
        index = 0;
    } else {
        index++;
    }
    setCardValues();
})

$("#previous").on("click", function(){
    if(index == 0){
        index = (phrase.length - 1);
    } else {
        index--;
    }
    setCardValues();
})

$("#greetings").on("click", function(){
    $("#phrase").animate({opacity: 0});
    $("#container-display").slideUp(500, function(){
        reset();
        dictionary = getTagalogGreetings();
        phrase = setPhraseArr();
        setModuleTitle(getTitleGreetings());
        setCardValues();
        $("#choose-mod-div").html("<h3 id='choose-mod'>Modules:</h3>");
    });
    $("#container-display").slideDown(500);
})

$("#manners").on("click", function(){
    $("#phrase").animate({opacity: 0});
    $("#container-display").slideUp(500, function(){
        reset();
        dictionary = getTagalogManners();
        phrase = setPhraseArr();
        setModuleTitle(getTitleManners());
        setCardValues();
        $("#choose-mod-div").html("<h3 id='choose-mod'>Modules:</h3>");
    });
    $("#container-display").slideDown(500);
})

$("#home").on("click", function(){
    $("#container-display").fadeOut(500);
    $("#mod-fade").fadeOut(500, function(){
        window.location = "../../index.html";
    });
})

$("#mod-fade").fadeIn(1000);