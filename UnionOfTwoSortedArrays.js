function union(arr1,arr2,n,m){
    var a = new Array();
    var count=0;

    for(var i=0;i<n;i++){
        a.push(arr1[i]);
    }
    for(var j=0;j<m;j++){
        a.push(arr2[j]);
    }
    a.sort();
    for(var k=0;k<a.length;k++){
        if(a[k] == a[k+1])
        count++;
    }
    var a_size =a.length;
    a_size = a_size - count;

    return count;
}
var arr1=[1,3,4,5,7];
var arr2=[2,3,5,6];
var n=arr1.length;
var m=arr2.length;
console.log(union(arr1,arr2,n,m));