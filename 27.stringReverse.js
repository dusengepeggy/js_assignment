var  word;
function reverseFunction(word){
  
  var arrayOfCharacters= word.split("");
  var reversedCharacter = arrayOfCharacters.reverse();
  var reversedString= reversedCharacter.join("");
  console.log(reversedString);
}
word="peggy";
reverseFunction( word);