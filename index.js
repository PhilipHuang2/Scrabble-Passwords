import pkg from 'word-graphs';
import fs from 'fs';

const {MinimalWordGraph, QueryBuilder} = pkg;


let mwg = new MinimalWordGraph();
try {
    const data = fs.readFileSync('./dictionary/dictionary.txt', 'utf8');
    data.split(/\r?\n/).forEach(line=> {
        mwg.add(line)
    })
    mwg.makeImmutable();
    let test = ['c','a','t'];
    console.log(mwg.lookup('cta'))
    // console.log(mwg.containsAll(["c","a","t"]));
} catch(err){
    console.error(err);
}