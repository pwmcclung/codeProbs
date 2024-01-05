function solution(start, finish) 
{
let shelvesBetween = finish - start;
let diff3 = Math.floor(shelvesBetween/3);
let diffMod = shelvesBetween % 3;
return diff3 + diffMod;
}