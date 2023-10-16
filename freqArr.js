function solve(arr){
    let freq = {};
    for (let num of arr){
      freq[num] = freq[num] ? freq[num] + 1 :1;
    }
    let sorted = arr.sort((a,b) => freq[b] - freq[a] || a - b);
    return sorted;
  }