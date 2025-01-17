


let player = Math.floor(Math.random() * 3)




const randomNum = Math.floor(Math.random() * 3)

// console.log(randomNum)

if (player === 0) {
    console.log("Player Picked:      Rock")
} else if (player === 1) {
    console.log("Player Picked:      Paper")
} else if (player === 2) {
    console.log("Player Picked:      Scissors")
} else console.log("Choose a number between 0 and 2");

if (randomNum === 0) {
    console.log("Computer picked:    Rock")
} else if (randomNum === 1) {
    console.log("Computer picked:    Paper")
} else if (randomNum === 2) {
    console.log("Computer picked:    Scissors")
}

if (player === 0 && randomNum === 0) {
    console.log("Tie! Try Again.")
} else if (player === 0 && randomNum === 1) {
    console.log("The Computer won!")
} else if (player === 0 && randomNum === 2) {
    console.log("The Player won!")
} else if (player === 1 && randomNum === 0) {
    console.log("The Player won!")
} else if (player === 2 && randomNum === 0) {
    console.log("The Computer won!")
} else if (player === 2 && randomNum === 2) {
    console.log("Tie! Try Again.")
} else if (player === 1 && randomNum === 1) {
    console.log("Tie! Try Again.")
} else if (player === 2 && randomNum === 1) {
    console.log("The Player won!")
}


