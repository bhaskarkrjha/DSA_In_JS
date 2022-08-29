function missingNo(arr,n){
    var total = (n + 1) * (n + 2)/2;
    for(var i=0;i<n;i++){
        total -= arr[i];
    }
    return total;
}
var arr = [1,2,3,5];
var n = arr.length;
console.log(missingNo(arr,n));