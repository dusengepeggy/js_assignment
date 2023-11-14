function consonants(word) {
    var splitarr=word.split("");
    var n= 0;
    for (let i= 0; i< splitarr.length; i++) {
        if(splitarr[i]!='a'||splitarr[i]!='e'||splitarr[i]!='i'||splitarr[i]!='o'||splitarr[i]!='u'
        ||splitarr[i]!='A'||splitarr[i]!='E'||splitarr[i]!='I'||splitarr[i]!='O'||splitarr[i]!='U'||splitarr[i]!=' '){
            n++;

        }
    }
    return n;
    
}
console.log(consonants("once upon a time"));