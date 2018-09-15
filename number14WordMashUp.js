//14
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?
let bandName= "";

const makeBandName = (str) => {
  const arr= str.split("");
  arr[0]= arr[0].toUpperCase() 
  const firstHalfName= arr;
  const lastLetter= firstHalfName.slice(-1);
  console.log(lastLetter[0]);
if( (firstHalfName[0].toLowerCase()) === lastLetter[0] ){
  const endOfBandName= arr.slice(1);
  const endOfBandNameJoined = endOfBandName.join("");
  const firstHalfNameJoined = firstHalfName.join("");
  console.log(endOfBandNameJoined);
  bandName= "The" + " " + firstHalfNameJoined + endOfBandNameJoined;

  } else {
    bandName= "The" + " " + (arr.join(""));
  }
// console.log(arr[0].toLowerCase());

return bandName;
}

makeBandName('alaska');