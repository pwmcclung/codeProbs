function driver(data) {
    //first five of surname, pad 9 if not 5
     let sur = data[2].slice(0,5).padEnd(5, '9').toUpperCase();
    //decade from year of birth
     let decade = data[3].slice(data[3].length -2, data[3].length -1); 
    //month of birth, plus five if female
   let monthB = '';
    if (data[4].includes('M')){
      if (data[3].includes('Jan')){
        monthB = '01';
      }else if (data[3].includes('Feb')){
        monthB = '02';
      }else if (data[3].includes('Mar')){
        monthB = '03';
      }else if (data[3].includes('Apr')){
        monthB = '04';
      }else if (data[3].includes('May')){
        monthB = '05';
      }else if (data[3].includes('Jun')){
        monthB = '06';
      }else if (data[3].includes('Jul')){
        monthB = '07';
      }else if (data[3].includes('Aug')){
        monthB = '08';
      }else if (data[3].includes('Sep')){
        monthB = '09';
      }else if (data[3].includes('Oct')){
        monthB = '10';
      }else if (data[3].includes('Nov')){
        monthB = '11';
      }else if (data[3].includes('Dec')){
        monthB = '12';
      }
      //monthB = data[3].filter((x) => monthObjM[x]).join('');
    }else if (data[4].includes('F')){
      //monthB = monthB.filter((x) => monthObjF[x]).join('');
      if (data[3].includes('Jan')){
        monthB = '51';
      }else if (data[3].includes('Feb')){
        monthB = '52';
      }else if (data[3].includes('Mar')){
        monthB = '53';
      }else if (data[3].includes('Apr')){
        monthB = '54';
      }else if (data[3].includes('May')){
        monthB = '55';
      }else if (data[3].includes('Jun')){
        monthB = '56';
      }else if (data[3].includes('Jul')){
        monthB = '57';
      }else if (data[3].includes('Aug')){
        monthB = '58';
      }else if (data[3].includes('Sep')){
        monthB = '59';
      }else if (data[3].includes('Oct')){
        monthB = '60';
      }else if (data[3].includes('Nov')){
        monthB = '61';
      }else if (data[3].includes('Dec')){
        monthB = '62';
      }
    }
    //date within month of birth
    let date = data[3].slice(0,2);
    //last dig of year
    let lastDig = data[3].slice(data[3].length-1,);
    //first two intials first, middle - 9 if no middle
    let firstInt = data[0].slice(0,1);
    let midInt = '';
    if (data[1] != ''){
      midInt = data[1].slice(0,1);
    }else{midInt = '9'};
    //arbCheck
    let arbCheck = '9AA';
   let ans =  sur+decade + monthB + date + lastDig + firstInt + midInt + arbCheck;
  return ans;
   
  }