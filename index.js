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

function getNext(){
    displayPhrase();
    setDefinition();
}

function displayPhrase(){
    document.querySelector("h2").innerHTML = phrase[index];
}

function setDefinition(){
    let selector = document.querySelector("h3");
    selector.classList.add("hide");
    selector.innerHTML = dictionary.get(phrase[index]);
}

function isMore(){
    return index < phrase.length - 1;
}

setDictionary();
setPhraseArr();

let index = 0;

document.querySelector("#start").addEventListener("click", function(){
    displayPhrase();
    setDefinition();
})

document.querySelector("#definition").addEventListener("click", function(){
    document.querySelector("h3").classList.remove("hide");
})

document.querySelector("#next").addEventListener("click", function(){
    if(!isMore()){
        index = 0;
    } else {
        index++;
    }
    getNext();
})
