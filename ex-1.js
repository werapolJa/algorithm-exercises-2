function fizzBuzz(n) {
  let newArray = []
  for (let index = 1; index <= n; index++) {
    if(index % 3 === 0){
      if(index % 5 === 0){
        newArray.push("FizzBuzz")
      }else{
        newArray.push("Fizz")
      }
    }else if(index % 5 === 0){
        if(index % 3 === 0){
          newArray.push("FizzBuzz")
        }else{
          newArray.push("Buzz")
        }
    }else{
      newArray.push(index)
    }

  
 
    
  }
  return  newArray
  //Start coding here
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
