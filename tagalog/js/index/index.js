
let dictionary = getTagalogGreetings();
let phrase = [];



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
    $("#phrase").text(phrase[index]);
}

function setDefinition(){
    $("#def").addClass("hide");
    $("#def").text(dictionary.get(phrase[index]));
}

function isMore(){
    return index < phrase.length - 1;
}

let index = 0;
setPhraseArr();
setCardValues();

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
