

const luckyNum = 7;

let guess = Math.floor(Math.random() * 11)

while (luckyNum != guess) {

    console.log("Nope, it isn't", guess)
    guess = Math.floor(Math.random() * 11)

}

console.log("My lucky number is", luckyNum,"!");