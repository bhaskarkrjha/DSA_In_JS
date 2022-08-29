// Write a program to check two strings are anagram or not.
function Anagram(str1,str2){
    var a=str1.split('').sort().join('');
    var b=str2.split('').sort().join('');
    var n= str1.length;
    var m= str2.length;
    if(n != m)
    console.log("Not Anagram");
    var count=0;
    for(var i=0;i<n;i++){
        if(a[i]==b[i])
        count++;
    }
    if(count == n)
    console.log("Anagram");
    else
    console.log("Not Anagram");
}
var str1="abcdef";
var str2="bcdaef";
Anagram(str1,str2);