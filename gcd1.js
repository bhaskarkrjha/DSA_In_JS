function  gcd1(x,y){
    if(x==0)
    return y;

    return gcd1(y%x ,x);
}
var x=3;
var y=6;
console.log(gcd1(x,y));