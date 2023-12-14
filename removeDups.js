function unique(arr) {
    let newArr = arr.filter((item, index) => arr.indexOf(item) == index);
      return newArr;
    }