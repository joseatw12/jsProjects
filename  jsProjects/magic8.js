

let answerOne = "Yes - definitely.";
let answerTwo = "It is decidedly so.";
let answerThree = "Without a doubt.";
let answerFour = "Reply hazy, try again.";
let answerFive = "Ask again later.";
let answerSix = "Better not tell you now.";
let answerSeven = "My sources say no.";
let answerEight = "Outlook not so good.";
let answerNine = "Very doubtful.";

let randomNumber = Math.floor(Math.random() * 10);

console.log("Question: Is Codédex better than Udemy yet?")

if (randomNumber === 1) {
    console.log("Magic 8 Ball:",answerOne)
} else if (randomNumber === 2) {
    console.log("Magic 8 Ball:",answerTwo)
} else if (randomNumber === 3) {
    console.log("Magic 8 Ball:",answerThree)
} else if (randomNumber === 4) {
    console.log("Magic 8 Ball:",answerFour)
} else if (randomNumber === 5) {
    console.log("Magic 8 Ball:",answerFive)
} else if (randomNumber === 6) {
    console.log("Magic 8 Ball:",answerSix)
} else if (randomNumber === 7) {
    console.log("Magic 8 Ball:",answerSeven)
} else if (randomNumber === 8) {
    console.log("Magic 8 Ball:",answerEight)
} else if (randomNumber === 9) {
    console.log("Magic 8 Ball:",answerNine)
} else {
    console.log("Try again")
}

