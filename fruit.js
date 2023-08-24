function fruit(reels, spins){
    let arr = [reels[0][spins[0]],reels[1][spins[1]],reels[2][spins[2]]];
    let freq = {};
    arr.forEach( e => freq[e] ? freq[e]++ : freq[e] = 1);
    
    let score = 0; 
    
    //High scores
    if (freq['Wild'] === 3) score += 100;
    if (freq['Star'] === 3) score += 90;
    if (freq['Bell'] === 3) score += 80;
    if (freq['Shell'] === 3) score += 70;
    if (freq['Seven'] === 3) score += 60;
    if (freq['Cherry'] === 3) score += 50;
    if (freq['Bar'] === 3) score += 40;
    if (freq['King'] === 3) score += 30;
    if (freq['Queen'] === 3) score += 20;
    if (freq['Jack'] === 3) score += 10;
    
    //Med Scores
    if (freq['Star'] === 2 && freq['Wild'] === 1) score += 18;
    if (freq['Bell'] === 2 && freq['Wild'] === 1) score += 16;
    if (freq['Shell'] === 2 && freq['Wild'] === 1) score += 14;
    if (freq['Seven'] === 2 && freq['Wild'] === 1) score += 12;
    if (freq['Cherry'] === 2 && freq['Wild'] === 1)  score += 10;
    if (freq['Bar'] === 2 && freq['Wild'] === 1) score += 8;
    if (freq['King'] === 2 && freq['Wild'] === 1) score += 6;
    if (freq['Queen'] === 2 && freq['Wild'] === 1) score += 4;
    if (freq['Jack'] === 2 && freq['Wild'] === 1) score += 2;
    
    //Low scores
    if (freq['Wild'] === 2 && freq['Wild'] !== 1) score += 10;
    if (freq['Star'] === 2 && freq['Wild'] !== 1) score += 9;
    if (freq['Bell'] === 2 && freq['Wild'] !== 1) score += 8;
    if (freq['Shell'] === 2 && freq['Wild'] !== 1) score += 7;
    if (freq['Seven'] === 2 && freq['Wild'] !== 1) score += 6;
    if (freq['Cherry'] === 2 && freq['Wild'] !== 1)  score += 5;
    if (freq['Bar'] === 2 && freq['Wild'] !== 1) score += 4;
    if (freq['King'] === 2 && freq['Wild'] !== 1) score += 3;
    if (freq['Queen'] === 2 && freq['Wild'] !== 1) score += 2;
    if (freq['Jack'] === 2 && freq['Wild'] !== 1) score += 1;
    
    return score;
  }