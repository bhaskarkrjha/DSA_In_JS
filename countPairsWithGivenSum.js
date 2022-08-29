function countPairs(arr,n,sum){
    var count=0;
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if(arr[i] + arr[j] == sum)
            count++;
        }
    }
    return count;
}
var arr=[1,5,7,-1];
var n=arr.length;
var sum=6;
console.log(countPairs(arr,n,sum));