function maxSubArraySum(arr,n){
    
    var max_so_far = arr[0];
    var max_ending_here = 0;

    for(var i=0;i<n;i++){
        max_ending_here +=arr[i];

        if(max_so_far < max_ending_here)
        max_so_far = max_ending_here;

        if(max_ending_here < 0)
        max_ending_here = 0;
    }
    return max_so_far;
}
var arr=[-2,-3,4,-1,-2,1,5,-3];
var n= arr.length;
console.log("Maximum contiguous subArray sum is :" + maxSubArraySum(arr,n));