function naughtyOrNice(data) {
    let naughtyCount = 0;
    let niceCount = 0;
    for (let month in data){
      [data[month]].map(day=>Object.values(day).map(day => day == "Naughty"? naughtyCount++ : niceCount++))
    }
      if (naughtyCount > niceCount){
        return 'Naughty!';
      }else if (niceCount >= naughtyCount){
        return 'Nice!';
      }
    }