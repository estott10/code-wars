// 1
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

//goal: create initial
//split string by space
//push the 0 index and then findindex of " " and push 

let initials = "";

const makeInitials = (string) => {
    const arrayofLetters = string.split("");
    const secondInitialIndex = string.indexOf(' ') + 1
    const secondInitial = arrayofLetters[secondInitialIndex];

    initials = arrayofLetters[0] + "." + secondInitial
  return initials;
    //  const secondInitialIndex= 
}

makeInitials("Erika Stott");
