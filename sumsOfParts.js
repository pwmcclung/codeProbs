function partsSums(ls) {
    let sumArr = [0];
    ls.reverse();
    ls.forEach( ele => sumArr.push(sumArr[sumArr.length -1]  + ele ));
    sumArr.reverse();
    return sumArr;
}