function validPhoneNumber(phoneNumber){
    let format = /^\(\d{3}\)\ \d{3}\-\d{4}$/;
    return format.test(phoneNumber);
  }