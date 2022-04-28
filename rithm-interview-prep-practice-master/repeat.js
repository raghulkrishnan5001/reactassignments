// add whatever parameters you deem necessary - good luck!
function repeat(s, n){
    var a = [];
    while(a.length < n){
        a.push(s);
    }
    return a.join('');
}
let rk= repeat('Matt', 3) 
let a =repeat('Elie', 2) 
let b =repeat('Michael', 0) 
console.log(rk)
console.log(a)
console.log(b)