function ReverseArray(arr){
    var temp;
    var i=0;
    var j=arr.length-1;
    while(i<j){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    console.log(arr);
}
var arr=[10,20,30,40];
ReverseArray(arr);