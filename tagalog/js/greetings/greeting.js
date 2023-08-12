
function getTagalogGreetings(){
    let dictionary = new Map();
    dictionary.set("Mabuhay!", "Welcome!");
    dictionary.set("Kumusta?", "Hi/Hello/How are you?");
    dictionary.set("Ayos lang. Ikaw?", "I'm doing fine. How about you?");
    dictionary.set("Ako si [pangalan].", "I am [name].");
    dictionary.set("Ako (naman) si [pangalan]", "I am (also/likewise/as well) [name]");
    dictionary.set("Ang pangalan ko ay [pangalan].", "My name is [name].");
    dictionary.set("Anong pangalan mo?", "What is your name?");
    dictionary.set("Ikinagagalak [rin] kitang makilala.", "Nice to meet you [too].");
    dictionary.set("Magandang araw [rin]!", "Good day [too]!");
    dictionary.set("Magandang umaga [rin]!", "Good morning [too]!");
    dictionary.set("Magandang hapon [din]!", "Good afternoon [too]!");
    dictionary.set("Magandang tanghali [rin]!", "Good afternoon [too]!");
    dictionary.set("Magandang gabi [rin]!", "Good evening [too]!");
    dictionary.set("Mabuti", "I am doing fine");
    dictionary.set("Ayos lang [din] ako", "I am doing good [too]");
    dictionary.set("Okey lang [din] ako", "I am doing okay [too]");
    dictionary.set("Paalam", "Goodbye");
    dictionary.set("Hanggang sa muli (formal)", "Meeting sometime in the future/See you again");
    dictionary.set("Magkita tayo mamaya (formal)", "See you later (literal translation/Let's meet up later");
    dictionary.set("Kitakits (casual)", "Meeting sometime in the future/See you later");
    dictionary.set("Mamaya, ah? (casual)", "See you later?");
    dictionary.set("[Sige,] mauna na ako", "[Alright,] I'll go now");
    return dictionary;
}

function getTitleGreetings(){
    return "Pagbati : Greetings";
}

