function getIssuer(number) {
    let num = Array.from(String(number), Number);
  
    if ( Number(num.slice(0,2).join('')) == 37  &&  num.length == 15  ){return 'AMEX'};
    if ( Number(num.slice(0,2).join('')) == 34  &&  num.length == 15  ){return 'AMEX'};
    if ( Number(num.slice(0,2).join('')) == 51  &&  num.length == 16  ){return 'Mastercard'};
    if ( Number(num.slice(0,2).join('')) == 52  &&  num.length == 16  ){return 'Mastercard'};
    if ( Number(num.slice(0,2).join('')) == 53  &&  num.length == 16  ){return 'Mastercard'};
    if ( Number(num.slice(0,2).join('')) == 54  &&  num.length == 16  ){return 'Mastercard'};
    if ( Number(num.slice(0,2).join('')) == 55  &&  num.length == 16  ){return 'Mastercard'};
    if ( Number(num.slice(0,4).join('')) == 6011 && num.length == 16  ){return 'Discover'};
    if ( Number(num[0]) == 4 && (num.length == 13 || num.length == 16)){return 'VISA' };
    return 'Unknown';
    
  }