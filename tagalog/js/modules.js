function setPhraseArr(){
    for(let key of dictionary.keys()){
        phrase.push(key);
    }
     return phrase;
}

function setCardValues(){
    displayPhrase();
    setDefinition();
}

function displayPhrase(){
    $("#phrase").text(phrase[index]);
}

function setDefinition(){
    $("#def").addClass("hide");
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

document.querySelector("#definition").addEventListener("click", function(){
    $("#def").removeClass("hide");
})

document.querySelector("#next").addEventListener("click", function(){
    if(!isMore()){
        index = 0;
    } else {
        index++;
    }
    setCardValues();
})

document.querySelector("#previous").addEventListener("click", function(){
    if(index == 0){
        index = (phrase.length - 1);
    } else {
        index--;
    }
    setCardValues();
})

document.querySelector("#greetings").addEventListener("click", function(){
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

document.querySelector("#manners").addEventListener("click", function(){
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

document.querySelector("#home").addEventListener("click", function(){
    $("#container-display").fadeOut(500);
    $("#mod-fade").fadeOut(500, function(){
        window.location = "../../index.html";
    });
})

$("#mod-fade").fadeIn(1000);