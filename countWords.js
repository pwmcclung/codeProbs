function countWords(str) {
    let words = str.match(/[^\s]+/g);
    return (words || []).length;
  }