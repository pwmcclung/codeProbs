def mostWordsFound(self, sentences: List[str]) -> int:
        lengths = []
        for x in range(len(sentences)):
            sent_list = sentences[x].split()
            lengths.append(len(sent_list))
        return max(lengths)