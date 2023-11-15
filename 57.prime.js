function palindrome(a) {
    var n=0;
    for (let i = 1; i <= a; i++) {
        if (a%i===0) {
            n++;
            
        }
        
    }
    if (n===2) {
        return "The number is prime";
        
    }
    else{
        return "Not prime";
    }
    
}
console.log(palindrome(5));