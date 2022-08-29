// Write a program that prints from 1 to 100.
// But for multiples of three print "fizz" instead of the number and for the multiples of five print "Buzz"
// for number which are multiples of both three and five print "fizzBuzz"

function fizzBuzz(){
    for( let i=1;i<=100;i++){
        let str = '';
        if(i%3 ==0){
            str +='fizz';
        }
        if(i%5 ==0){
            str +='Buzz';
        }
        console.log(i+ str);
    }
}
fizzBuzz();