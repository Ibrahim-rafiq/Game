let gameNum = 25;

let userNum = prompt("Guess the number that comes in the 5 times table :");

while(userNum != gameNum){
    userNum = prompt("You entered a wrong number. Guess again:");
};

console.log("congratulations, you entered a right 🎁🎁🎁");