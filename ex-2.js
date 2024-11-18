function countPositivesSumNegatives(input) {
  // console.log(input);
  const numArray = []
  let num = 0
  let minusNum = 0

  for (let index = 0; index <= input.length; index++) {
    if(input === ''){
      return numArray
    }else if(input[index]  >= 0){
      num +=1
    }else if(input[index]  < 0){
      minusNum +=input[index] 
    }
  //  console.log(index);
  }
  numArray.push(num)
  numArray.push(minusNum)

return numArray
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
