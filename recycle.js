function recycle(array) {
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];
    for (let x of array){
      if (x.hasOwnProperty('secondMaterial')){
        if(x.secondMaterial == 'plastic'){
          plastic.push(x.type);
        }else if (x.secondMaterial == 'paper'){
          paper.push(x.type);
        }else if (x.secondMaterial == 'glass'){
          glass.push(x.type);
        }else if (x.secondMaterial == 'organic'){
          organic.push(x.type);
        }
         if(x.material == 'plastic'){
          plastic.push(x.type);
        }else if (x.material == 'paper'){
          paper.push(x.type);
        }else if (x.material == 'glass'){
          glass.push(x.type);
        }else if (x.material == 'organic'){
          organic.push(x.type);
        }
        
      }else{
        
         if(x.material == 'plastic'){
          plastic.push(x.type);
        }else if (x.material == 'paper'){
          paper.push(x.type);
        }else if (x.material == 'glass'){
          glass.push(x.type);
        }else if (x.material == 'organic'){
          organic.push(x.type);
        }
      }
    }
    return [paper, glass, organic, plastic];
  }