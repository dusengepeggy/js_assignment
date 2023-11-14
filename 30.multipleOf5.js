function displayMulti5(a,b){
   //a and b are ranges within which we are going to check
    for(let i=a ; i<=b; i++ ){
        if(i%5===0){
           console.log (i);
        }

    }
 
}
console.log("mulitples of 5 within the range");
displayMulti5(2,56);