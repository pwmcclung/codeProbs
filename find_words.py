class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        arr = []
        count = 0
        while count < len(words):
            word = words[count]
            if x in word:
                arr.append(count)   
            count += 1
        return arr