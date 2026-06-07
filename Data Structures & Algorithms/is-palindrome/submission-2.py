class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0 
        r = len(s)-1
        s = s.lower()
        
        while l < r:
            if s[l].isalnum() == False:
                l+=1
            if s[r].isalnum() == False:
                r-=1
            if s[l] == s[r]:
                l+=1
                r-=1
            else: return False
        return True

