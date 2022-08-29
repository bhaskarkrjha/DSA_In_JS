function factorial(n){
    var a=1;
    for(var i=1;i<=n;i++){
        a=a * i;
    }
    return a;
}
var n=5;
console.log(factorial(n));