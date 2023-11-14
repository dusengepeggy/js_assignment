// 7. Create a function that receives an array and returns the smallest number from that array
function smallest( arr){
    var small=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<small){
            small=arr[i];
        }

    }
    return small;

}
console.log( smallest([1,2,3,4,5]));