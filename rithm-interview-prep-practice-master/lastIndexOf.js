// add whatever parameters you deem necessary - good luck!
    function lastIndexOf(arr, val) {
        for (let i = arr.length - 1; i >= 0; i--) {
          if (arr[i] === val) {
            return i;
          }
        }
        return -1;
      }
      console.log(lastIndexOf([1, 2, 3, 4], 2)); 
      console.log(lastIndexOf(([1, 2, 3, 4, 2], 2)));
      console.log(lastIndexOf([1, 2, 3, 4], 22)); 