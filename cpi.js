function CPI(data,consumer,start,end){
    let consArr = consumer.split(',');
    let firstYear = 0;
    let lastYear = 0; 
    for (let i = 0; i < consArr.length;i++){
      let itemArr = consArr[i].split(' ');
      if(itemArr.length == 2){
        let amt = parseInt(itemArr[0]);
        let item = itemArr[1];
        firstYear += data[start][item] * amt;
        lastYear += data[end][item] * amt;
      }else if (itemArr.length == 3){
        let amt = parseInt(itemArr[1]);
        let item = itemArr[2];
        firstYear += data[start][item] * amt;
        lastYear += data[end][item] * amt;
      }
    }
    let final =  (lastYear - firstYear) / firstYear * 100;
    return Number(final.toFixed(2));
    }