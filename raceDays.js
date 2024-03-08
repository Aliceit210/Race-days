let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Your race starts at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race starts at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Your race starts at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}