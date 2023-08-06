function inverseSlice(items, a, b) {
    let first = items.slice(0,a);
    let second = items.slice(b,);
    return first.concat(second);
  }