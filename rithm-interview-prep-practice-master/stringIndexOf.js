// add whatever parameters you deem necessary - good luck!
function stringIndexOf(a,b){
for(let i=0; i<a.length; i++){
if(a[i]==b){
   return i;
}

}
    return -1;
}
let u = stringIndexOf('awesome','e');
let t = stringIndexOf('awesome','z');
console.log(u,t)