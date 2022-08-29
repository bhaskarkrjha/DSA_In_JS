function maxProductSubArray(arr,n){
    var max_so_far =0;
    for(var i=0;i<n;i++){
        var product = arr[i];
        for(var j=i+1;j<n;j++){
            product *=arr[j];
            if(product>max_so_far)
            max_so_far=product;
        }
    }
    return max_so_far;
}
var arr=[6,-3,-10,0,2];
var n=arr.length;
console.log(maxProductSubArray(arr,n));