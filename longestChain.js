function solve(s){
    let sSpace = s.replace(/[^aeiou]/ig, ' ');
     let sSpaceArr = sSpace.split(' ');
     let longestChain = sSpaceArr.reduce((longestChain, vowelChain)=> {
       return vowelChain.length > longestChain.length ? vowelChain : longestChain;
     }, '');
     return longestChain.length;
   }