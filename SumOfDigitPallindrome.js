function isDigitSumPalindrome(N){
    var r;
    var sum=0;
    while(N > 0){
       r = N %10;
       sum = sum + r;
       N =Math.floor( N/10 );
    }
    // console.log(sum);
    var result = sum;
    var d;
    var sum1 =0;
    while(result > 0){
        d = result % 10;
        sum1 = d + sum1*10;
        result =Math.floor(result/10);
    }
    // console.log(sum1);
    if(sum1 == sum)
    console.log("Digit Sum Pallindrome");
    else
    console.log("Digit sum not palindrome");
}
var N=56;
isDigitSumPalindrome(N);