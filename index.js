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
    
    console.log((mwg.startsWith('wu')).map((element)=>{
        if(element.length > 2) 
            return element[2]
    }).filter((value,index,self)=>{
        return self.indexOf(value) === index
    }))
    // console.log(mwg.containsAll(["c","a","t"]));
} catch(err){
    console.error(err);
}