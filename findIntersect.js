var findIntersectionValues = function(nums1, nums2) {
    let val1 = nums1.filter(x => nums2.includes(x)).length;
    let val2 = nums2.filter(x => nums1.includes(x)).length;
    return [val1,val2];
};