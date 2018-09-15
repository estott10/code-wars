//6
// #Triple Trouble
//
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

let newStr= "";

const combineSamePositions= (str1, str2, str3) => {
const arrayofLetters1 = str1.split("");
const arrayofLetters2 = str2.split("");
const arrayofLetters3 = str3.split("")

for(var i= 0; i < arrayofLetters1.length; i++){
      newStr += arrayofLetters1[i] + arrayofLetters2[i] + arrayofLetters3[i];
  }
  return newStr;
}


combineSamePositions("aa", "bb", "cc");