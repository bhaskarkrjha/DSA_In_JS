function LeftTriangle(n){
    var str='';
    for(var i=0;i<n;i++){
        for(var j=0;j<=i;j++){
            str +="*"
            
        }
        str +="\n";
    }
    console.log(str);
}
var n=4;
LeftTriangle(n);