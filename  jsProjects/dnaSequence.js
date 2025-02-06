



const dnaPieces = ["A", "C", "G", "T"];

let randomIndex = [];

let letterString = "";



for (let i = 0; i < 3; i++) {

    randomIndex.push(Math.floor(Math.random() * dnaPieces.length));

    dnaPieces[randomIndex] = letterString;

    randomIndex.push(letterString);
}


console.log(randomIndex1 );





















// let myDNA = dnaPieces[Math.floor(Math.random() * dnaPieces.length)];

// const myDNA = [
//
// ];

// myDNA.push(dnaPieces[Math.floor(Math.random() * dnaPieces.length)]);

// for (let i = 0; i < 3; i++) {
//
//
//     myDNA.push(dnaPieces[Math.floor(Math.random() * dnaPieces.length)]);
//
//     myDNA.push(myDNA[i]);
//
//     // console.log(myDNA)
//
// } console.log(myDNA)