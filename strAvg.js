function averageString(str) {
    let nums = {'zero':0, 'one':1, 'two':2, 'three': 3,'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9};
    let numsArr = ['zero', 'one', 'two', 'three','four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr = str.split(' ');
    let summed = arr.map((x)=>nums[x]).reduce((a,b) => a + b,0);
    let reverseNums = {0:'zero', 1:'one', 2:'two',3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
    let floored = Math.floor(summed/arr.length);
    return reverseNums[floored] || 'n/a';
  }