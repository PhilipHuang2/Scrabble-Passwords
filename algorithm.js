import pkg from 'word-graphs';
import fs from 'fs';

const {MinimalWordGraph, QueryBuilder} = pkg;

function main() {
    let mwg = new MinimalWordGraph();
    let data;
    try {
        data = fs.readFileSync('./dictionary/dictionary.txt', 'utf8');
    data.split(/\r?\n/).forEach(line=> {
        mwg.add(line)
    })
    mwg.makeImmutable();
    } catch (err) {
        console.error(err);
    }

    checkWords("xyzmze", "a", mwg)
}

function checkWords(scrabble, word, dictionary){
    if(dictionary.lookup(word))
        console.log(word);
    
    const availableNext = dictionary.startsWith(word).map((element)=>{
        return element[word.length]
    }).filter((value,index,self)=>{
        if(value != undefined)
            return self.indexOf(value) === index
    }).sort()
    const nextLetter = scrabble.split('').filter((value)=>{
        return availableNext.includes(value);
    }).filter((value,index,self)=>{
            return self.indexOf(value) === index
    }).sort()
    nextLetter.forEach((element)=>{
        let smallerScrabble = scrabble.split('');
        smallerScrabble.splice(
            smallerScrabble.indexOf(element),1
            )
        checkWords(smallerScrabble.join(''), word+element, dictionary)
        // console.log(scrabble.split('').filter((letter)=>{
        //     return letter != element
        // }).join(""), word + element);
    })
    
}

main();