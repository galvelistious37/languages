let phrase = [];
let dictionary = new Map();
let keepGoing = true;

function setPhraseArr(){
    phrase.push("Pagbati");
    phrase.push("Mabuhay!");
    phrase.push("Kumusta?");
    phrase.push("Ayos lang. Ikaw?");
    phrase.push("Ako si [pangalan].");
    phrase.push("Ako naman si [pangalan]");
    phrase.push("Ang pangalan ko ay [pangalan].");
    phrase.push("Anong pangalan mo?");
    phrase.push("Ikinagagalak [rin] kitang makilala.");
}

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

function getNext(){
    index++;
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

setPhraseArr();
setDictionary();

let index = 0;

document.querySelector("#start").addEventListener("click", function(){
    displayPhrase();
    setDefinition();
})

document.querySelector("#definition").addEventListener("click", function(){
    document.querySelector("h3").classList.remove("hide");
})

document.querySelector("#next").addEventListener("click", function(){
    getNext();
})
