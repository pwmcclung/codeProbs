def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        val1 = len([x for x in nums1 if x in nums2])
        val2 = len([x for x in nums2 if x in nums1])
        return [val1,val2]
        