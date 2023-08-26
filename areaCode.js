function areaCode(text) {
    return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
  }