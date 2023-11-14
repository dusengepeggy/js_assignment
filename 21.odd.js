function displayOdd(){
    var sum=0;
    for(let i=0 ; i<=100 ; i++ ){
        if(i%2===1){
            sum+=i;
        }

    }
    return sum;
}
console.log("sum of odd numbers between 1 and 100",displayOdd());