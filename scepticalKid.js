function AlanAnnoyingKid(input){
  
    let arr = input.split(' ');
    let returnPhrase ;
    
    if (arr.includes("didn't")){
      let newArr = arr.slice(2,);
      let action1 = newArr[1];
      let newObj1 = newArr.slice(2,);
      let cleanNewObj1 = newObj1.join(' ').replace(/[,.-]/g, '');
      let posAct1 = action1.slice(0, action1.length -2);
      returnPhrase = `I don't think you didn't ${action1} ${cleanNewObj1} today, I think you did ${action1} it!`
    }else if (!arr.includes("didn't")){
      let newArr1 = arr.slice(2,);
      let action2 = newArr1[0];
      let newObj2 = newArr1.slice(1,);
      let cleanNewObj2 = newObj2.join(' ').replace(/[,.-]/g, '');
      let posAct2 = action2.slice(0, action2.length -2);
      
      returnPhrase = `I don't think you ${action2} ${cleanNewObj2} today, I think you didn't ${posAct2} at all!`
    }
    return returnPhrase;
  
          }