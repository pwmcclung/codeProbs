var findFinalValue = function(nums, original) {
    let found = true;
    while (found == true){
        if (nums.includes(original)){
            original = original * 2;
        }else{
            found == false;
            break;
        }
    }
    return original;
};