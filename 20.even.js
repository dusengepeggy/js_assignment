function displayEven(){
    var sum=0;
    for(let i=0 ; i<=100 ; i++ ){
        if(i%2===0){
            sum+=i;
        }

    }
    return sum;
}
console.log("sum of even numbers between 1 and 100",displayEven());