function findmedian(arr) {
  
    var array=arr.sort((a,b)=>a-b);
   var n=Math.floor(arr.length/2);
   
         if ((arr.length) %2 ===0) {  
         console.log ( (array[n-1]+array[n])/2);
       
        }
        else  {

         console.log (array[n]);   
        }
   
    
   
   
}
findmedian([1,2,3,4,5,6,7,8,9]) ;
