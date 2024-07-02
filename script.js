function waterGunSnake() {
  let waterScore = 0;
  let gunScore = 0;
  let finalScore = 0;
  let i = 5;
  let choices = ["water", "gun", "snake"];

  for (let roundNum = 0; roundNum < i; roundNum++) {
    let userInput = prompt("Enter your choice: water, gun or snake?");
    if (userInput == "water") {
      waterScore += 1;
      finalScore += 1;
    } else if (userInput == "gun") {
      gunScore += 2;
      finalScore += gunScore + waterScore;
    }
    else if(userInput=='snake'){
     finalScore=(gunScore - waterScore);
    }

    if(finalScore<0){
      alert("Oops! You lose the game");
      // finalScore=0;
      
      break;
    }
   alert(`Round ${roundNum+1} complete. Your current score is ${finalScore}.`);
  }
  if(finalScore>0){
    alert("Congrats, You win the game");
  }else{
    alert("finalScore: "+finalScore);
  }
}
waterGunSnake();