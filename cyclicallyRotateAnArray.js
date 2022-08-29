function cyclicallyRotate(arr,n){
    var temp;
    temp =arr[n-1];
    for(var i=n-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=temp;
    return arr;
}
var arr=[1,2,3,4,5];
var n=arr.length;
console.log(cyclicallyRotate(arr,n));