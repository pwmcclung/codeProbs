function reverseCase(string) {
    let newString = string.replace(/(\w)(\1)+/g, ele => ele[0] == ele[0].toLowerCase() ? ele.toUpperCase() : ele.toLowerCase());
    return newString;
   }