// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(e,f){
    for(let i=e.length; i>=0;i--){
    if(e[i]==f){
       return i;
    }
    
    }
        return -1;
    }
    let j = stringLastIndexOf('awesome','e');
    console.log(j);