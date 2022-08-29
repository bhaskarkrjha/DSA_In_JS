function isBalanced(str){
    var open1=0;
    var open2=0;
    var open3=0;

    for(var i=0;i<str.length;i++){
        if(str[i] == '(')
        open1++;
        else if(str[i]== '{')
        open2++;
        else if(str[i]== '[')
        open3++;

        else if(str[i]==')'){
            if(open1 ==0)
            return false;
            open1--;
        }
        else if(str[i] =='}'){
            if(open2 ==0)
            return false;
            open2--;
        }
        else if(str[i] ==']'){
            if(open3 ==0)
            return false;
            open3--;
        }
    }
    return open1==0 && open2==0 && open3==0;
}
var str ="({}){}[]"
if(isBalanced(str))
console.log("Balanced");
else
console.log("Not Balanced");