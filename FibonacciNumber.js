function fibonacci(n){
    var a=[];
    a[0]=0;
    a[1]=1;
    for(var i=2;i<n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    for(var i=0;i<n;i++){
        console.log(a[i]);
    }
}
fibonacci(10);