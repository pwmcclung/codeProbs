var twoOutOfThree = function(nums1, nums2, nums3) {
    let new1 = nums1.filter((x) => nums2.includes(x));
    let new2 = nums2.filter((x) => nums3.includes(x));
    let new3 = nums1.filter((x) => nums3.includes(x));
    let newCombo = new1.concat(new2).concat(new3);
    return newCombo.filter((val, idx) => newCombo.indexOf(val)== idx);
};