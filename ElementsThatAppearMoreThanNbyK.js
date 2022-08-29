function MorethanNbyK(arr,n,k){
    var visited=[];
    for(var i=0;i<n;i++){
        if(visited[i]==1)
        continue;

        var count=1;
        for(var j=i+1;j<n;j++){
            if(arr[i] == arr[j]){
                count++;
                visited[j]=1;
            }
        }
        if(count >n/k)
        console.log(arr[i]+' '+count);
    }
}
var arr=[3,1,2,2,1,2,3,3];
var n=arr.length;
var k=4;
MorethanNbyK(arr,n,k);