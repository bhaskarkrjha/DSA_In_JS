function Armstrong(num ){
    var res=num;
    var sum=0;
    var d;
    while(num >0){
        d= num%10;
        num = Math.floor(num/10);
        sum = sum + d*d*d;
    }
    if(res==sum)
    console.log("Armstrong Number");
    else
    console.log("Not Armstrong");
}
var num=371;
Armstrong(num);