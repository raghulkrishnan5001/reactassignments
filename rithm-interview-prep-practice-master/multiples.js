// add whatever parameters you deem necessary - good luck!
function multiples(x,n){
    const arr=[];
    for(let i=1; i<=n; i++){
    arr.push(x*i);
}
return arr;
}
console.log(multiples(2,5))