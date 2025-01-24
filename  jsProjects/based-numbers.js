let myNumber = 72101108108111;

let binary = "";

while (myNumber > 0) {

    let remainder = myNumber % 2;

    binary = remainder + binary;

    myNumber = Math.floor(myNumber / 2);

} console.log(binary);

















// if (myNumber > 0) {
//
//     myNumber = Math.floor(myNumber / 2);
//
// } if (myNumber % 2 === 0) {
//
//     myNumber = Math.floor(myNumber / 2);
//
//     binary = "0";
//
//
// } if (myNumber % 2 != 0) {
//
//     myNumber = Math.floor(myNumber / 2);
//
//     binary = "1";
//
// } console.log(binary);










// for (let i = myNumber; i >= 0; i--) {
//
//     let i = Math.floor(myNumber / 2 );
//
//     if (i % 2 == 0) {
//
//        binary = 0;
//
//
//     }
//
//     if (i % 2 != 0) {
//
//         binary = 1;
//
//
//     }
// console.log(binary);
//     // console.log(i);
// }

