function sort012(arr,n){
    var count0 =0;
    var count1 =0;
    var count2 =0;
    
    for(var i=0;i<n;i++){
        if(arr[i]==0)
        count0++;
        if(arr[i]==1)
        count1++;
        if(arr[i]==2)
        count2++;
    }
    for(var i=0;i<count0;i++){
        arr[i]=0;
    }
    for(var i=count0;i<(count0+count1);i++){
        arr[i]=1;
    }
    for(var i=(count0 + count1);i<n;i++){
        arr[i]=2;
    }
}
var arr = [1,0,1,2,1,0];
var n = arr.length;
sort012(arr,n);
for(var i=0;i<n;i++){
    console.log(arr[i] + " ");
}
