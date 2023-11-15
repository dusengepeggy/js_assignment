function squareroot(num){
    if(num>=0){
        var root=Math.sqrt(num);
        return root;
    }
    else{
        return "Invalid Input";
    }
}
console.log("the root of the given number is:",squareroot(25));
