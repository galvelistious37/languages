
$("#spanish-lang").on("click", function(){
    alert("Spanish has not been setup yet... go to Tagalog, lol");
})

$("#tagalog-lang").click(function(){
    $("#language-display").fadeOut(500, function(){
        window.location = "./tagalog/html/modules.html";
    });
})

$("#language-display").fadeIn(1000);
