function formatPoem(poem) {
    let arr = poem.split('. ');
    let newPoem = arr.join('.\n');
    return newPoem;
  }