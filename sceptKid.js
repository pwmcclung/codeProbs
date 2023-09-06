//parameters: take in an input string. which will be today I then an action verb and object. 
//return : the kids response. it will be the negation of the input string. 
//examples:
// "Today I played football. => "I don't think you played football today, I think you didn't play at all!"
// "Today I cleaned the kitchen." =>"I don't think you cleaned the kitchen today, I think you didn't clean at all!"


// "Today I didn't play football." => "I don't think you didn't play football today, I think you did play it!"
// "Today I didn't attempt to hardcode this Kata." => "I don't think you didn't attempt to hardcode this Kata today, I think you did attempt it!"

//pseudocode: I think there are several things that must be done to solve this problem. 
//first, the input string needs to be made into an array of words. 
// next the today I section of the input must be eliminated. 
// then we basically have two routes: one, the sentence is a positve and the array will have two words. the verb and noun
//the other array will be longer than two. 
//we must isolate the verb and the object. 

function AlanAnnoyingKid(input){
    //split the input string into an array of words
      let arr = input.split(' ');
     //create an array the does not contain Today or I
    let actions = arr.slice(2,);
    let negAct = String(actions.slice(0,actions.length-1));
    console.log(negAct)
    let obj = actions[actions.length-1];
    let objClean = obj.slice(0, obj.length-1);
    let act = String(actions.slice(0,1));
    let actClean = act.slice(0, act.length -2);
    let act2 = String(actions.slice(1,2))
    
    let act2Clean = act.slice(0, act.length -2);
   
  //   if (actions.length > 2){
  //     return `I don't think you didn't ${act2Clean} ${objClean} today, I think you did ${actClean} it!`
  //   }else{
  //     return `I don't think you ${act} ${objClean} today, I think you didn't ${actClean} at all!`
  //   }
  //   let obj = actions[actions.length-1]
  //   let objClean = obj.slice(0, obj.length-1)
  //   let actionsLen = actions.length;
  //   if (actionsLen > 2){
  //    console.log( `I don't think you ${actions.join('')}today. I think you did ${actions[0]}it!`)
  //   }
  //    console.log( `I don't think you ${actions.join(' ')}today. I think you did ${actions[0]}it!`)
    
          }