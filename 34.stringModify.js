function stringModifier(word,pos,rep){

    var wordSplit=word.split("");
    wordSplit[pos]=rep;
    return wordSplit.join("");

}
console.log(stringModifier("paggy",1,"e"));