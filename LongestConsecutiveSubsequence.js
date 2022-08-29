function longest(arr,n){
    var ans=0;
    var count=0;

    arr.sort();
    
    var a=new Array();
    a.push(arr[0]);

    for(var i=1;i<n;i++){
        if(arr[i] != arr[i-1])
        a.push(arr[i]);
    }
    for(var i=0;i<a.length;i++){
        if(i>0 && a[i] == a[i-1] +1)
        count++;
        else
        count =1;

        ans=Math.max(ans,count);
    }
    return ans;
}
var arr=[36,41,56,35,44,33,34,92,43,32,42];
var n=arr.length;
console.log(longest(arr,n))