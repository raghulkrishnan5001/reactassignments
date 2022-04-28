// add whatever parameters you deem necessary - good luck!
function min(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
    return lowest;
  }
 let krish=min([-1,6,3,2.2,-10,-4]);
 console.log(krish)
