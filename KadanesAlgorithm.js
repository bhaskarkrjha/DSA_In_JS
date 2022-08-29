function maxSubArraySum(arr,n){
    var max_sum_so_far =arr[0];
    var max_sum_ending_here=0;

    for(var i=0;i<n;i++){
        max_sum_ending_here +=arr[i];

        if(max_sum_ending_here >= max_sum_so_far)
        max_sum_so_far=max_sum_ending_here;

        if(max_sum_ending_here<0)
        max_sum_ending_here=0;

    }
    return max_sum_so_far;
}
var arr=[1,2,3,-2,5];
var n=arr.length;
console.log(maxSubArraySum(arr,n));