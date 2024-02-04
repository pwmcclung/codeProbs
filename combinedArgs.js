function combine(inputItems){
    let arr = [...arguments];
    let combinedObjects = {};
    for(let i = 0; i < arguments.length; i++){
      for(let key in arguments[i]){
        if(!combinedObjects[key]){
        combinedObjects[key] = arguments[i][key];
        }
        else {
          combinedObjects[key] += arguments[i][key];
        }
      }
    }
  return combinedObjects;
  }