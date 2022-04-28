// add whatever parameters you deem necessary - good luck!
function entries(obj) {
    return Object.keys(obj).map(function(key) {
      return [key, obj[key]];
    });
  }
  
  let objA = { a: 1, b: 2, c: 3 };
  
  console.log(entries(objA));