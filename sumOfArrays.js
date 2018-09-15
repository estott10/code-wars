//9
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


const sumAllArrays = (arr1, arr2) => {
    let totalarr= arr1.concat(arr2);

console.log(totalarr);

const sum= totalarr.reduce( (acc, elem, i)=> ( acc + elem)  );

return sum;

}


sumAllArrays([2,3,4], [5,6,7]) 

// ==> 27