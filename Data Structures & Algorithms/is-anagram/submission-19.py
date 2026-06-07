class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mp ={}
        if len(s) != len(t):
            return False
        for i in range(len(s)):
            mp[s[i]] = mp.get(s[i], 0) + 1
        
        for i in range(len(t)):
            if t[i] not in mp or mp.get(t[i], 0) == 0:
                return False
            else:
                mp[t[i]] = mp.get(t[i], 0) -1
        return True