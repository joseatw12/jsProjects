const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
];

// let waldoIndex = (characters.indexOf("Waldo"));

// console.log("Found Waldo at index", waldoIndex,"!");

if (characters.includes("Waldo")) {
    const waldoIndex = characters.indexOf("Waldo");
    console.log("Found Waldo at index " + waldoIndex, "!");

} else {

    console.log("Not found");

}

