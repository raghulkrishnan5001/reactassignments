// add whatever parameters you deem necessary - good luck!
function separate(arr){
    return []
            .concat(arr.filter(v => v === "cat"))
            .concat(arr.filter(v => v === "water"))
            .concat(arr.filter(v => v === "dog"))
  }
let outputi=separate(['dog','cat','water']);
console.log(outputi)