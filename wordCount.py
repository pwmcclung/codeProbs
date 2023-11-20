import re
def timed_reading(max_length, text):
    count = 0
    text = re.sub(r'[^\w\s]','',text)
    wordArr = list(text.split(' '))
    for word in wordArr:
        if len(word) <= max_length and word != '':
            count += 1
    return count