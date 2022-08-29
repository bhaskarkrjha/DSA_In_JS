function ReverseNumber(N){
    var temp="";
    for(var i=N.length-1;i>=0;i--){
        temp +=N[i];
    }
    console.log(temp);
}
var N="1234";
ReverseNumber(N);