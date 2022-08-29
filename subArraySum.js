  function subArraySum(arr,n,sum){
      var currentSum;
      for(var i=0;i<n;i++){
          currentSum=arr[i];
          for(var j=i+1;j<n;j++){
              currentSum=currentSum + arr[j];
              if(currentSum == sum){
                console.log("Sum found between indexes " + i +' '+j);
              }
          }
      }
      console.log("No subArray found");
  }
  var arr =[15,2,4,8,9,5,10,23];
  var n= arr.length;
  var sum =23;
  subArraySum(arr,n,sum);