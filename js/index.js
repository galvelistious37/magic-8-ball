let responses = [];

function populateResponses(){
    responses.push("It is certain");
    responses.push("It is decidedly so");
    responses.push("Without a doubt");
    responses.push("Yes definitely");
    responses.push("You may rely on it");
    responses.push("As I see it, yes");
    responses.push("Most likely");
    responses.push("Outlook good");
    responses.push("Yes");
    responses.push("Signs point to yes");
    responses.push("Reply hazy, try again");
    responses.push("Ask again later");
    responses.push("Better not tell you now");
    responses.push("Cannot predict now");
    responses.push("Concentrate and ask again");
    responses.push("Don't count on it");
    responses.push("My reply is no");
    responses.push("My sources say no");
    responses.push("Outlook not so good");
    responses.push("Very doubtful");
}

function getRandoNum(){
    return Math.floor(Math.random() * 20);
}

$("#answer").click(function(){
    $("#eight-ball").fadeOut(250);
    document.querySelector("p").innerHTML = responses[getRandoNum()];
    setTimeout(function(){
        $("#response-area").fadeIn(500);
    }, 500)
    $("#answer").toggle();
    $("#ask-again").toggle();
});

$("#ask-again").click(function(){
    $("#response-area").fadeOut(250);
    setTimeout(function(){
        $("#eight-ball").fadeIn(500);
    }, 500)
    $("#answer").toggle();
    $("#ask-again").toggle();
});

populateResponses();
