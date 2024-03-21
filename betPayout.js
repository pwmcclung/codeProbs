function calculatePayout(betHeads, betTails, outcome) {
    let headsPayout = (betHeads[0] * betHeads[1]).toFixed(2);
    let tailsPayout = (betTails[0] * betTails[1]).toFixed(2);
    if (outcome == 'Tails'&& (betHeads[1] - tailsPayout) > 0){
      return `The outcome is Tails, In total I have to pay ${tailsPayout}$ to the winner, I have pocketed ${(betHeads[1] - tailsPayout).toFixed(2)}$ !`
    }else  if (outcome == 'Heads' && (betTails[1] - headsPayout) > 0){
      return `The outcome is Heads, In total I have to pay ${headsPayout}$ to the winner, I have pocketed ${(betTails[1] - headsPayout).toFixed(2)}$ !`
    }else if ( outcome == 'Tails' && (betHeads[1] - tailsPayout) == 0){
      return `The outcome is Tails, In total I have to pay ${tailsPayout}$ to the winner, I broke even!`
    } else if ( outcome == 'Heads' && (betTails[1] - headsPayout) == 0){
      return `The outcome is Heads, In total I have to pay ${headsPayout}$ to the winner, I broke even!`
    }else if ( outcome == 'Tails' && (betHeads[1] - tailsPayout) < 0){
      return `The outcome is Tails, In total I have to pay ${tailsPayout}$ to the winner, of which ${Math.abs((((tailsPayout - betHeads[1])* 100)/100 )).toFixed(2)}$ from my own pockets :(`
    } else if ( outcome == 'Heads' && (betTails[1] - headsPayout) < 0){
      return `The outcome is Heads, In total I have to pay ${headsPayout}$ to the winner, of which ${Math.abs((((headsPayout - betTails[1])* 100)/100)).toFixed(2)}$ from my own pockets :(`
    }
   
  }