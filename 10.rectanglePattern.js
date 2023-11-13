// 10. Create a function that displays a pattern 
function patternPrinter(n){
    
    for (let j = 0; j < n ; j++) {
        var arr=[];
        for (let i = 0; i <= n; i++) {
            arr+="* ";
            
        }
        console.log(arr);
    }
}
patternPrinter(4);