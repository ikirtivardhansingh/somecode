class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        mp = {}

        for i in range(len(nums)):
            mp[nums[i]] = mp.get(nums[i], 0) + 1
        for i in range(len(nums)):
            if mp.get(nums[i]) > len(nums)/2:
                return nums[i];             


