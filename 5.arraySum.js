// 5.function that recieves an array and return the sum of all the elements inside that array
const sumation=(arr)=>{
    var sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        
    }
    return sum;
}
console.log( sumation([1,2,3,4,5]));