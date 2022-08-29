// find the greatest commom divisor of two numbers
// exaample : 4, 6 === 3
// example : 2, 3 === 1

function getGCD(x,y){
    let min = Math.min(x,y);
    let max = min === x ? y : x;

    if(max % min === 0){
        return min;
    }
    else {
        let mid = Math.floor(max/2);
        for( let i=mid;i>0;i--){
            if(max % i === 0 && min % i === 0){
                return i;
            }
        }
    }
}
console.log(getGCD(2,3));