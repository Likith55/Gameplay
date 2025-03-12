let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user");
let compScorePara=document.querySelector("#comp");

const genCompChoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame =(userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    
    
    if(userChoice == compChoice){
        console.log("Draw game");
        msg.innerText="Game draw,Play again!";
        msg.style.backgroundColor="rgb(146, 102, 110)";
    }
    else{
        let userwin=true;
        if(userChoice === "rock"){
            userwin=compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") 
            userwin = compChoice === "scissors" ? false :true;
        
        else{
            userwin = compChoice === "rock" ? false: true;
        }
        showWinner(userwin,userChoice,compChoice);   

    }
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win");
        msg.innerText="You win ," + "your choice was " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="You lost," + "Computer choice was " + compChoice + " beats your  " + userChoice;
        msg.style.backgroundColor="red";

    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});

