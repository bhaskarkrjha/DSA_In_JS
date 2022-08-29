function duplicateArray(arr,n){
    var arr1 = new Array();
    arr.sort();
    for(var i=0;i<n;i++){
        if(arr[i] == arr[i+1] && arr[i+1] != arr[i+2])
        arr1.push(arr[i]);
    }
    if(arr1.length ==0)
    arr1.push(-1);

    return arr1;
}
var arr =[2,3,1,2,3];
var n=arr.length;
console.log(duplicateArray(arr,n));