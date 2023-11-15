function check(arr,val) {
    if (arr.indexOf(val)!==-1) {
        return "found";
        
    }
    else{
        return "not found";
    }
    
    }
    console.log(check([ 'a', 'b', 'p', 'c', 'd' ],'p'));
    
