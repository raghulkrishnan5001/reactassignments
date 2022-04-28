// add whatever parameters you deem necessary - good luck!
function slice(arr, start, end) {
    let newArr = [];
    if (end === undefined || end > arr.length) {
        end = arr.length;
    }
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log (slice([1, 2, 3, 4, 5], 0, 2)); 
console.log(slice([1, 2, 3, 4, 5], 2, 4)); 
console.log(slice([1, 2, 3, 4, 5], 2)); 
console.log(slice([1, 2, 3, 4, 5], 2, 10)); 