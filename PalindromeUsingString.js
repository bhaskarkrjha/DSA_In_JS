function pString(str){
    var str ;
    var flag=0;
    for(var i=0;i<str.length;i++){
        if(str[i] != str[str.length-1-i]){
            flag=1;
            break;
        }
    }
    if(flag==1)
    console.log("Not Palindrome");
    else
    console.log("Palindrome");
}
var str = "112211";
pString(str);