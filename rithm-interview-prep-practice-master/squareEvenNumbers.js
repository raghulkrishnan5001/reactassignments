// add whatever parameters you deem necessary - good luck!
function squareEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i] ** 2;
      }
    }
    return sum;
  }
   let outputz=squareEvenNumbers([5, 6, 7]);
    console.log(outputz)