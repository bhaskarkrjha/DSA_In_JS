function gcd(a,b){
    if(a==0)
    return b;
    if(b==0)
    return a;

    return gcd(b,a%b);
}
function gcdOfArray(arr){
    var temp=arr[0];
    for(var i=0;i<arr.length;i++){
        temp=gcd(temp,arr[i]);
    }
    return temp;
}
var arr=[3,4,6];
console.log(gcdOfArray(arr));