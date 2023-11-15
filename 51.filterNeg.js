function cond(arr) {
    return arr >=0;    
}
function filterArr(arr){
    return arr.filter(cond);
}
console.log(filterArr([12,5,45,35,-67,5,67,89,90]));
