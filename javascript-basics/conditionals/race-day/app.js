let raceNumber = Math.floor(Math.random() * 1000);

const early = true;
const age = 20;

if (early && age > 18){
  raceNumber += 1000;

} if (early && age > 18){
  console.log(`You will race at 9:30AM. You're race number is ${raceNumber}`);

} else if (age > 18 && !early){
  console.log(`You will race at 11:00AM. You're race number is ${raceNumber}`);
} else if( age < 18 ){
  console.log(`You will race at 12:30PM. You're race number is ${raceNumber}`);
} else {
  console.log(`Go to the registration desk.`)
}