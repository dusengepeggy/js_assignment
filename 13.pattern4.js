function pattern(n){
    
    for (let j = 0; j < n ; j++) {
        var arr=[];
        for (let i = 0; i < n; i++) {
          if(i===0||i===n-1||j===0||j===n-1){
            arr+="1 ";
          } 
          else{
            arr+="0 "
          } 
        }
        console.log(arr);
    }
}
pattern(5);