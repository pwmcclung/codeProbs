function histogram(results) {
    let fill = '#';
    let count = results.length;
    let newStrArr = [];
    while (count > 0){
      let item = results.pop();
      let strCon = `${count}|${fill.repeat(item)} ${item}\n`;
      if (item == 0){
        strCon = `${count}|\n`;
      }
      newStrArr.push(strCon);
      count--;
    }
    return newStrArr.join('');
  }