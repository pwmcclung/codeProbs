function to24hourtime(hour, minute, period) {
    let newHour = hour + 12;
   if (hour < 10 && period == 'am' && minute < 10){
     return `0${hour}0${minute}`;
   }else if (hour < 10 && period == 'am' && minute > 9){
      return `0${hour}${minute}`;
   }else if (hour > 9 && hour <12 && period == 'am' && minute < 10){
     return `${hour}0${minute}`;
   }else if (hour > 9 && hour < 12 && period == 'am' && minute > 9){
      return `${hour}${minute}`;
   }else if(hour == 12 && period == 'pm' && minute == 0){
     return "1200";
   }else if (hour == 12 && period == 'am' && minute == 0){
     return "0000";
   }else if (hour == 12 && period == 'am' && minute <10){
     return `000${minute}`;
   }else if (hour == 12 && period == 'am' && minute >9){
     return `00${minute}`;
   }else if (hour == 12 && period == 'pm' && minute <10){
     return `120${minute}`;
   }else if (hour == 12 && period == 'pm' && minute >9){
     return `12${minute}`;
   }else if (hour < 12 && period == 'pm' && minute < 10 ){
     return `${newHour}0${minute}`;
   }else if (hour < 12 && period == 'pm' && minute > 9 ){
     return `${newHour}${minute}`;
  }
    }