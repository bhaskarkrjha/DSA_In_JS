function minimum(arr){
    var min=arr[0];
    for(var i=0;i<arr.length;i++){
        if(min > arr[i])
        min=arr[i];
    }
    return min;
}
var arr =[4,5,1,2,3];
console.log(minimum(arr));