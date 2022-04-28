// add whatever parameters you deem necessary - good luck!
function keys(obj3){
    let result =[]
    for(let key in obj3){
        result.push(key);
     }
       return (result);
    }
    let obj3 = {};
    console.log(keys(obj3))