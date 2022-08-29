function findPairs(arr1,arr2,n,m,x){
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            if(arr1[i] + arr2[j] ==x)
            console.log(arr1[i] + " "+ arr2[j]);
        }
    }
}
var arr1 = [1,2,3,7,5,4];
var arr2 = [0,7,4,3,2,1];
var n=arr1.length;
var m=arr2.length;
var x=8;
findPairs(arr1,arr2,n,m,x);