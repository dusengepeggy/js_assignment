function factorial(n){
    prod=1;
    if(n<0){
        return "invalid input";
    }
    else{
    for (let i=n;i>0;i--){
        prod*=i;
    }
    return prod;
}


}
console.log(factorial(5));