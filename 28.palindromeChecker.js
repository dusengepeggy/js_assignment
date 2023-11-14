function palindrome(word){
    var res;
    var arr=word.split("");
    var rev=arr.reverse().join("");
    if(word===rev){
        res="it is a palindrome";

    }
    else{
        res="it is not a palindrome";
    }

  return res;
}
console.log(palindrome("1001"));