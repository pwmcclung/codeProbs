def pig_latin(word)
    if word.length < 4
        return word
    else 
        return word.slice(1...word.length) + word.slice(0) + 'ay'
      end
  end