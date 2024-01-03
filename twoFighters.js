function declareWinner(fighter1, fighter2, firstAttacker) {
    let f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker; 
}