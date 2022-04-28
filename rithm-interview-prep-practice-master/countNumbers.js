// add whatever parameters you deem necessary - good luck!
function countNumbers(hello) {
    count = 0;
    for(i in hello){
      if(hello[i] == parseInt(hello[i])){
        count++;
      }
    }
    return count
}

console.log(countNumbers(['a','b','3','awesome','4'])); 
console.log(countNumbers(['32', '55', 'awesome', 'test', '100'])); 
console.log(countNumbers([])); 
console.log(countNumbers(['7', '12', 'a', '', '6', '8']));   