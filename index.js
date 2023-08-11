let phrase = [];
let dictionary = new Map();
let keepGoing = true;

function setDictionary(){
    dictionary.set("Pagbati", "Greetings");
    dictionary.set("Mabuhay!", "Welcome!");
    dictionary.set("Kumusta?", "Hi/Hello/How are you?");
    dictionary.set("Ayos lang. Ikaw?", "I'm doing fine. How about you?");
    dictionary.set("Ako si [pangalan].", "I am [name].");
    dictionary.set("Ako naman si [pangalan]", "I am (also/likewise/as well) [name]");
    dictionary.set("Ang pangalan ko ay [pangalan].", "My name is [name].");
    dictionary.set("Anong pangalan mo?", "What is your name?");
    dictionary.set("Ikinagagalak [rin] kitang makilala.", "Nice to meet you [too].");
}

function setPhraseArr(){
    for(let key of dictionary.keys()){
        phrase.push(key);
    }
}

function setCardValues(){
    displayPhrase();
    setDefinition();
}

function displayPhrase(){
    $("h2").text(phrase[index]);
}

function setDefinition(){
    $("h3").addClass("hide");
    $("h3").text(dictionary.get(phrase[index]));
}

function isMore(){
    return index < phrase.length - 1;
}

let index = 0;
setDictionary();
setPhraseArr();
setCardValues();

document.querySelector("#definition").addEventListener("click", function(){
    $("h3").removeClass("hide");
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
