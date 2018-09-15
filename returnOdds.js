//12
// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]


const odds= (arr) => {

    const finalArr= arr.filter( num => (num % 2) != 0  )
  return finalArr;
  }
  
  
  odds([1,2,3,4,5])