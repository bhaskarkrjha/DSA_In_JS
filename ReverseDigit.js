function ReverseDigit(Digit){
    var result =0;
    while(Digit !=0){
        var d =Digit%10;
        Digit =Math.floor(Digit/10);
        result = d + result*10;
    }
    console.log(result);
}
var Digit = 1234;
ReverseDigit(Digit);