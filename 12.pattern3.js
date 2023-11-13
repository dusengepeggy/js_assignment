function pattern(n){
    
    for (let j = 0; j < n ; j++) {
        var arr=[];
        for (let i = n-1; i >= 0; i--) {
          if(i>=j){
            arr+="1 ";
          } 
          else{
            arr+="0 ";
          } 
        }
        console.log(arr);
    }
}
pattern(5);