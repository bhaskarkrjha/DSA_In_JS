function uncommomchar(s1,s2){
    var n=s1.length;
    var m=s2.length;
    var s=[];
    for(var i=0;i<n;i++){
        if(!(s1.includes(s2[i])))
        s.push(s2[i]);
    }
    for(var j=0;j<m;j++){
        if(!(s2.includes(s1[j])))
        s.push(s1[j]);
    }
    return s.join("");
    // console.log(s);
}
var s1="abcd";
var s2="xyad";
console.log(uncommomchar(s1,s2));