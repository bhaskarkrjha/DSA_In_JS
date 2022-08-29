function Prime(n){
    var flag=0;
    for(var i=2;i<= Math.sqrt(n);i++){
        if(n%i == 0){
            console.log("Number is not prime")
            flag=1;
            break;
        }
    }
    if(flag==0)
    console.log("Number is prime");
}
var n =17;
Prime(n);