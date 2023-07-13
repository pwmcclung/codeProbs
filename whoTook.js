function whoTookTheCarKey(message) {
    return message.map(function(e){
      return String.fromCharCode(parseInt(e, 2));
    }).join('');
  }