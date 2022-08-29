function subArraySumZeo(arr,n){
    for(var i=0;i<n;i++){
        if(arr[i]==0)
        return true;

        var sum =arr[i];
        for(var j=i+1;j<n;j++){
            sum +=arr[j];
            if(sum==0)
            return true;
        }
    }
    return false;
}
var arr=[4,2,-3,1,6];
var n=arr.length;
console.log(subArraySumZeo(arr,n));