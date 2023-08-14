var getMilitaryTime = function(input) {
    let arr = input.split(':');
    let amPm = String(arr[2].slice(2,));
    let hour = arr[0];
    let min = arr[1];
    let sec = String(arr[2]).slice(0,2);
    if (amPm == 'AM' && hour =='12'){
      return `00:${min}:${sec}`;
    }else if (amPm == 'AM'){
      return `${hour}:${min}:${sec}`;
    }else if (amPm == 'PM'&& hour == '12'){
      return `${hour}:${min}:${sec}`;
    }else if (amPm == 'PM'&& hour != '12'){
      return `${Number(hour) + 12}:${min}:${sec}`;
    }
  };