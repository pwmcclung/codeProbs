var findDifference = function(nums1, nums2) {
    let arr1 = nums1.filter(x=> !nums2.includes(x));
    let arr2 = nums2.filter(x=> !nums1.includes(x));
    arr1 = _.uniq(arr1,false);
    arr2 = _.uniq(arr2,false);
    return [arr1,arr2];
};