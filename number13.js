//13
// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].




const calculateArrays = (arr) => {
    let score = 0;
    let arrOfArrs= [];
  if (typeof (arr[0]) != "number" && typeof (arr[1]) != "number") {
    return "Void!"
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === "number") {

        score += arr[i]
        for(var j= 0; j< score; j++) {
        arrOfArrs.push(arr)
        }
      }
    }
    console.log(score)
    return arrOfArrs;
  }

}


calculateArrays(['a', 3])