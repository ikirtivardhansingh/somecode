class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        left = 0
        right = len(s)-1
        if len(s) != len(t):
            return False
        while left < right:
            if s[left] != s[right]:
                return False
            else:
                left+=1
                right-=1
        return True
