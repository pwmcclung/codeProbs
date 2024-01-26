var heightChecker = function(heights) {
    let copyArr = heights.slice().sort((a,b) => a - b, 0);
    let count = 0;
    for (let i = 0; i < heights.length; i++){
        if (heights[i] != copyArr[i]){
            count++;
        }
    }
    return count;
};