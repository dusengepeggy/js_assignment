function ascSortCheck(arr) {
    var n=arr.slice(0,arr.length);
   var asc=arr.sort((a,b)=>a-b);
    var a=0;
   
    for (let i = 0; i < arr.length; i++) {
       if (n[i]===asc[i]) {
        a++;
        
       }
        
    }
    if(a===arr.length){
        return "Ascending";
    }
    else{
        return "not Ascending";
    }
    
        

    
}
console.log(ascSortCheck([1,3,54,5,6,66,400]));
