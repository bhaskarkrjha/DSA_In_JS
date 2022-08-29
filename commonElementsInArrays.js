function commonElement(arr1,arr2){
    var n=arr1.length;
    var m=arr2.length;

    var i=0;
    var j=0;

    var a= new Array();
    while(i<n && j<m){
        if(arr1[i] == arr2[j]){
            a.push(arr1[i]);
            i++;
            j++;
        }
        if(arr1[i]>arr2[j])
        i++;
        if(arr1[i]<arr2[j])
        j++;
    }
    a.sort();
    return a;
}
var arr1=[3,4,2,2,4];
var arr2=[3,2,2,7];
console.log(commonElement(arr1,arr2));