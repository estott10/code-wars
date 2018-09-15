//4
// Who likes keywords? Nobody likes keywords, so why use them?
//
// You know what keyword I use too much? if! We should make a function called _if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.

const print5 = () => {
    console.log(5);
    return 5
  }
  
  const print10 = () => {
    console.log(10);
    return 10
  }
  
  
  function executeLogicalFunction(bool, func1, func2){
      if(bool === true){
        return func1()
      } else if (bool === false){
        return func2()
  
      }
  }
  
  
  executeLogicalFunction(true, print5, print10)