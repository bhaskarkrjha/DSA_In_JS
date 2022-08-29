function kthLargest(arr,n,k){
    arr.sort();
    return arr[n-k];
}
function kthSmallest(arr,n,k){
    arr.sort();
    return arr[k-1];
}
var arr =[4,2,5,3,1];
var n=arr.length;
var k=2;
console.log(kthLargest(arr,n,k));
console.log(kthSmallest(arr,n,k));
