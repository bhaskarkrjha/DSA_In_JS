function pNumber(N){
    var num=N;
    var result=0;
    var d;
    while(N !=0){
       d=N%10;
       result=d + result*10;
       N=Math.floor(N/10);
    }
    console.log("Reverse of number : "+result);
    if(num==result)
    console.log("Palindrome")
    else
    console.log("Not Palindrome");

}
var N=331133;
pNumber(N);