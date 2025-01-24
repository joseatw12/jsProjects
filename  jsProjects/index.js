// let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];
//
// groceryList [2] = "🧈 Butter";
//
// groceryList [4] = "🧼 Laundry Soap";
//
// console.log(groceryList);


// let multiple = 10;
// const numbers = [0,1,2,3,4,5,6,7,8,9];
//
// for (let i = 0; i < numbers.length; i++) {
//     let ans = numbers[i] * multiple;
//     console.log(multiple,"*", numbers[i],"=",ans);
// }

// const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
//
// for (let i = 0; i < musicNotes.length; i++) {
//     console.log(musicNotes[i]);
// }


const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

const shiftedElement = musicPlaylist.shift();
const poppedElement = musicPlaylist.pop();

musicPlaylist.push("Everybody Wants to rule the world");
musicPlaylist.unshift("Addicted to you","Wake me up");

console.log(musicPlaylist);