let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#User_Score");
let compScorePara=document.querySelector("#Comp_Score");
// let msg=document.querySelector(".Message_container");
const genComputerchoice=()=>{
    const options=["rock","paper","scissor"];
    const radIdx=Math.floor(Math.random()*3);
    return options[radIdx];
}

const gameDraw=()=>{
    console.log("Draw. Try Again....");
    msg.innerText="Draw try again";
    msg.style.backgroundColor="#081b31";

}

const ShowWin=(userWin)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        
        console.log("You Lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        
    }
};
const playGame=(userChoice)=>{
    console.log("User Choice=", userChoice)
    const compChoice=genComputerchoice();
    console.log("Computer Choice is =",compChoice);

    if (userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;

        }
        else if (userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        ShowWin(userWin);
    }

   


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})