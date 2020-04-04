let raceNumber = Math.floor(Math.random() * 1000);

//Indicating whether a runner registered early
let registeredEarly = true;

//Runner age
let runnerAge = 18;  

//Control flow 
if (runnerAge > 18 && registeredEarly) { 
  raceNumber +=1000;
}

//Another control flow to show time and ages for different races
if (runnerAge > 18 && registeredEarly) {
  console.log(`If your race number is ${raceNumber}, your race will begin at 9:30am.`);
} else if (!registeredEarly && runnerAge > 18) {
  console.log(`If your race number is ${raceNumber}, your race will begin at 11.00am.`);
} else if (runnerAge < 18) {
   console.log(`If your race number is ${raceNumber}, your race will begin at 12.30am.`);
} else {
   console.log(`If you're 18 years old, please go to the registration desk.`);
}

