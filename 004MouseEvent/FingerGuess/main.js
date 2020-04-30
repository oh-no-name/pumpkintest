var r, score = 0, grade = 4, lastHumanChoice;
var lastWinner="noone",lastComputerChoice="rock";
function rock() {

    document.getElementById("myChoice").innerHTML = "<img src=\"imgs/rock.png\"/>"
    judge("rock");
    lastHumanChoice = "rock";
}

function scissors() {

    document.getElementById("myChoice").innerHTML = "<img src=\"imgs/scissors.png\"/>"
    judge("scissors");
    lastHumanChoice = "scissors";

}

function paper() {

    document.getElementById("myChoice").innerHTML = "<img src=\"imgs/paper.png\"/>"
    judge("paper");
    lastHumanChoice = "paper";

}

function judge(myChoice) {
    r = 3 * Math.random();
    var computerResult;
    if (grade == 1) {
        computerResult = onlyRocker();
    }
    else if (grade == 2) {
        computerResult = learnFromHuman();
    }
    else if(grade==3){
        computerResult = winnerAgain();
        lastComputerChoice = computerResult;
    }
    else if (grade ==4){
        computerResult = loseChange();
        lastComputerChoice = computerResult;
    }
    else if (grade ==4){
        computerResult = lovePaper();
    }
    else {
        computerResult = computerChoice();
    }
    if (myChoice == "rock") {
        if (computerResult == "rock") {
            lastWinner = "noone";
        }
        else if (computerResult == "scissors") {
            lastWinner = "human";
            score += 1;
        }
        else if (computerResult == "paper") {
            lastWinner = "com";
            score -= 1;
        }
    }
    else if (myChoice == "scissors") {
        if (computerResult == "rock") {
            lastWinner = "com";
            score -= 1;
        }
        else if (computerResult == "scissors") {
            lastWinner = "noone";
        }
        else if (computerResult == "paper") {
            lastWinner = "human";
            score += 1;
        }
    }
    else if (myChoice == "paper") {
        if (computerResult == "rock") {
            lastWinner = "human";
            score += 1;
        } else if (computerResult == "scissors") {
            lastWinner = "com";
            score -= 1;
        } else if (computerResult == "paper") {
            lastWinner = "noone";
        }
    }
    if (score >= 5) {
        score = 0;
        grade += 1;
    }
    document.getElementById("result").innerHTML = "第" + grade + "关<br>积分：" + score;
    if (grade >= 5) {
        document.getElementById("result").innerHTML = "厉害了哟，通关了！" + score;
    }
}

function go() {
}

function computerChoice() {
    r = Math.random() * 3;
    if (r < 1) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/rock.png'/>";
        return "rock";
    } else if (r < 2) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/scissors.png'/>";
        return "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/paper.png'/>";
        return "paper";
    }
}
function lovePaper() {
    r =  Math.random() * 3;
    var temp;
    if (r < 0.8) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/rock.png'/>";
        temp = "rock";
    } else if (r < 1.6) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/scissors.png'/>";
        temp = "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/paper.png'/>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML = "艾布先生";
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + temp + ".png'/>";
        return temp;
}
function randomPlayer() {
    r =  Math.random() * 3;
    var temp;
    if (r < 1) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/rock.png'/>";
        temp = "rock";
    } else if (r < 2) {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/scissors.png'/>";
        temp = "scissors";
    } else {
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/paper.png'/>";
        temp = "paper";
    }
    document.getElementById("computerName").innerHTML = "随心所欲";
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + temp + ".png'/>";
    return temp;
}
function onlyRocker() {
    document.getElementById("computerName").innerHTML = "大锤哥";
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/rock.png'/>";
    return "rock";
}

function learnFromHuman() {
    document.getElementById("computerName").innerHTML = "模仿帝";
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + lastHumanChoice + ".png'/>";
    return lastHumanChoice;
}
function winnerAgain() {
    document.getElementById("computerName").innerHTML = "赢了还想赢";
    if(lastWinner=="com"){
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + lastComputerChoice + ".png'/>";
        return lastComputerChoice;
    }
    var temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + temp + ".png'/>";
    return temp;
}
function loseChange(){
    document.getElementById("computerName").innerHTML = "输了就换";
    if(lastWinner=="human"){
        var temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + temp + ".png'/>";
        return temp;
    }
    temp = computerChoice();
    document.getElementById("computerChoice").innerHTML = "<img src='imgs/" + temp + ".png'/>";
    return temp;
}
function getResultExclude(exclusion){
    var temp = computerChoice();
    if(temp==exclusion){
        return getResultExclude(exclusion);
    }
    else{
        return temp;
    }
}