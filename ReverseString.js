function ReverseString(str){
    
    var revs ="";
    for(var i=str.length-1;i>=0;i--){
        revs +=str[i];
    }
    return revs;
}
var str = "Hello";
console.log(ReverseString(str));