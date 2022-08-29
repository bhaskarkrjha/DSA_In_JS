function mergeTwoString(str1,str2){
    var a=str1.split("");
    var b=str2.split("");
    var res='';
    for(var i=0;i< a.length;i++){
        if(i<a.length)
        res +=a[i];
        if(i<b.length)
        res +=b[i];
    }
    return res;
}
var str1='Hello';
var str2='Bye';
console.log(mergeTwoString(str1,str2));