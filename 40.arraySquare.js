const squareArray=(arr)=>{
    var c=[];
    for (let i = 0; i < arr.length; i++) {
        c[i]=arr[i]*arr[i];
         
    }
   return c;
}
console.log(  squareArray([10,2,3,4,5]));