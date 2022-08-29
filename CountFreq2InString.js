// Find frquency of characters in string
function findCount(str1){
	var n = str1.length;
	var str2 =[];
	for(var i=0;i<n;i++){
       if(str2[i]==1)
	   continue;

	   var count=1;
	   for(var j=i+1;j<n;j++){
		   if(str1[i]==str1[j]){
			   str2[j]=1;
			   count++;
		   }
	   }
	   console.log(str1[i] + " " + count);
	}
}
var str1 = "geeksforgreeks";
findCount(str1);