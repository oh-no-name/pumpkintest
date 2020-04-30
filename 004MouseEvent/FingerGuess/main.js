var r;
function rock(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"imgs/rock.png\"/>"
    var computerResult = computerChoice();
    judge("rock",computerResult);
}
function scissors(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"imgs/scissors.png\"/>"
    var computerResult = computerChoice();
    judge("scissors",computerResult);
}
function paper(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"imgs/paper.png\"/>"
    var computerResult = computerChoice();
    judge("paper",computerResult);
}
function judge(myChoice,computerResult) {
    if (myChoice=="rock"){
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML="Draw";
        }
        else if (computerResult=="scissors"){
            document.getElementById("result").innerHTML="Win";
        }
        else if (computerResult=="paper"){
            document.getElementById("result").innerHTML="Lose";
        }
    }
    else if(myChoice=="scissors"){
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML="Lose";
        }
        else if (computerResult=="scissors"){
            document.getElementById("result").innerHTML="Draw";
        }
        else if (computerResult=="paper"){
            document.getElementById("result").innerHTML="Win";
        }
    }
    else if(myChoice=="paper"){
        if(computerResult=="rock"){
            document.getElementById("result").innerHTML="Win";
        }
        else if (computerResult=="scissors"){
            document.getElementById("result").innerHTML="Lose";
        }
        else if (computerResult=="paper"){
            document.getElementById("result").innerHTML="Draw";
        }
    }
}

function go(){

}
function computerChoice(){
    if(r<1){
        document.getElementById("computerChoice").innerHTML="<img src='imgs/rock.png'/>";
        return "rock";
    }
    else if(r<2){
        document.getElementById("computerChoice").innerHTML="<img src='imgs/scissors.png'/>";
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src='imgs/paper.png'/>";
        return "paper";
    }
}