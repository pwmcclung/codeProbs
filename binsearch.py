def search(nums, target):
    low = 0
    high = len(nums) - 1
    mid = 0
    while low <= high:
        mid = (high + low) //2
        if nums[mid] > target:
            high = mid - 1
        elif nums[mid] < target:
            low = mid - 1
        else:
            return mid
    return -1


print(search([1,2,3,4,5,6,7,8,9,10], 4))