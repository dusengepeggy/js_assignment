//  9. Create a function that combines two arrays into one single array
function combine(arrayOne ,arrayTwo){
    var union=arrayOne.concat(arrayTwo);
    return union;

}
console.log(combine(['a','b','c','d'],['e','f','g']));