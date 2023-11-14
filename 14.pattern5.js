function pattern(n){
for(let i=0 ;i<n;i++){
    let arr=[];
    for(let j=n-1 ;j>=0;j--){
        if(i===j){
            arr+="1 "
        }
        else{
            arr+="  "
        }
    
    }
    console.log(arr);
}

}
pattern(4);