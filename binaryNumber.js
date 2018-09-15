//7
//Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.



let binaryNumArr = [];


const makeBinaryNum = (num) => {
  const str = num.toString();
  const arr = str.split("")

  for (var i =0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 0) {
      binaryNumArr.push(arr[i]);
    }
      return binaryNumArr;
  }

}

makeBinaryNum(45034051);