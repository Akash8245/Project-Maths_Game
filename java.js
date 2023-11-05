let playing = false;
let score;
let action;
let time;
let correctAns;


//if we click on start
function start() {
    //if we are playing
    if (playing == true) {
        //relode page
        location.reload();

    }

    //if we are not playing
    else {
        //hiding game over window
        document.getElementById("gameover").style = "display:none;"
        //set playing to true
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //show time
        document.getElementById("time").style = "display:block;"
        time = 60;
        document.getElementById("timevalue").innerHTML = time;
        //change button to reset
        document.getElementById("start").innerHTML = "Reset Game";

        //reduce time by 1sec / countdown
        //yes-continue game
        //no-game over
        startcountdown();

        //generate and answers
        generateQA();
    }
}

//functipons to validate answers

for (i = 1; i <= 4; i++) {
    document.getElementById("b" + i).onclick =
        function () {
            if (playing == true) {
                if (this.innerHTML == correctAns) {
                    //correct answer
                    score = score + 1;
                    document.getElementById("scorevalue").innerHTML = score;

                    //show correct box
                    document.getElementById("tryagain").style = "display:none;"
                    document.getElementById("correct").style = "display:block;"
                    setTimeout(function () {
                        document.getElementById("correct").style = "display:none;"
                    }, 1000)
                    //Generate correct answer only is answer is correct
                    generateQA();

                }
                else {
                    document.getElementById("correct").style = "display:none;"
                    document.getElementById("tryagain").style = "display:block;"
                    setTimeout(function () {
                        document.getElementById("tryagain").style = "display:none;"
                    }, 1000)

                }

            }
        }
}

//function for countdown
function startcountdown() {

    action = setInterval(function () {
        time--;
        document.getElementById("timevalue").innerHTML = time;

        if (time == 0) {
            clearInterval(action);
            document.getElementById("gameover").style = "display:block;"
            document.getElementById("endscore").innerHTML = score;
            document.getElementById("time").style = "display:none;"
            document.getElementById("correct").style = "display:none;"
            document.getElementById("tryagain").style = "display:none;"
            playing = false;

            document.getElementById("start").innerHTML = "Start Game";
        }
    }, 1000)
}

//Function to generate Question and answer
function generateQA() {
    let x = 1 + Math.round(9 * Math.random());
    let y = 1 + Math.round(9 * Math.random());

    correctAns = x * y;

    document.getElementById("question").innerHTML = x + "X" + y;

    let correctPos = 1 + Math.round(3 * Math.random());

    //fill one box with correct answers
    document.getElementById("b" + correctPos).innerHTML = correctAns;

    //file remaining with false value
    let i;
    for (i = 1; i <= 4; i++) {
        if (i != correctPos) {
            document.getElementById("b" + i).innerHTML = 1 + Math.round(9 * Math.random() * y);
        }
    }


}