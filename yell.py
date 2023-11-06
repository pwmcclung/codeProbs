def filter_words(st):
    st = " ".join(st.strip().split()).lower()
    newSt = st[0].upper() + st[1:]
    return newSt