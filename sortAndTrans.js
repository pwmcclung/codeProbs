function sortTransform(a){
    //a copy of the array sorted ascending
    let sortedAsc = a.slice().sort(function(a,b){return a -b;});
    //a copy of the array sorted descending
    let sortedDesc =  a.slice().sort(function(a,b){return b -a;});
    //first part - first two, last two turned into a 'word'
    let strFirst = String.fromCharCode(a[0]) + String.fromCharCode(a[1]) + String.fromCharCode(a[a.length-2]) + String.fromCharCode(a[a.length-1]);
    //second part - sort ascending, turn into a word
    let strSecond = String.fromCharCode(sortedAsc[0]) + String.fromCharCode(sortedAsc[1]) + 
        String.fromCharCode(sortedAsc[sortedAsc.length-2]) + String.fromCharCode(sortedAsc[sortedAsc.length-1]);
    // third part - sort descending, turn into a word
    let strThird = String.fromCharCode(sortedDesc[0]) + String.fromCharCode(sortedDesc[1]) + 
        String.fromCharCode(sortedDesc[sortedDesc.length-2]) + String.fromCharCode(sortedDesc[sortedDesc.length-1]);
    //fourth part - turn to acsii char, sort alphabetically
    let sortAscii = a.slice();
    let newSort = [];
    for (let i = 0; i < sortAscii.length; i++){
      newSort.push(String.fromCharCode(sortAscii[i]))
    }
   let sortAscii2 = newSort.sort();
   let strFourth = sortAscii2[0] + sortAscii2[1] + sortAscii2[sortAscii2.length -2] + sortAscii2[sortAscii2.length -1];
    //use string interpolation to return the string variables in the correct format
    return `${strFirst}-${strSecond}-${strThird}-${strFourth}`;
   
  }