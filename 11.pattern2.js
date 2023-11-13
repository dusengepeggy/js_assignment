function pattern(n){
    
    for (let j = 0; j < n ; j++) {
        var arr=[];
        for (let i = n-1; i >=j; i--) {

            arr+="1 ";
         
        }
        console.log(arr);
    }
}
pattern(5);
