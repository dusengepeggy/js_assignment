function fib(n) {
    var a=0,b=1,temp=[0,1] ;
for (let i=0;i<n-2;i++){
    temp[i+2]=a+b;
    a=b;
    b=temp[i+2];
    
    }
    return temp;
}
console.log(fib(6));