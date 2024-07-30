solution = (force1, force2, theta) => {
    let  newT = theta * Math.PI / 180;
    let  force2x = force2 * Math.cos(newT);
    let force2y = force2 * Math.sin(newT);
    let  forceX = force1 + force2x;
    let forceY = force2y;
    let ans =  [Math.hypot(forceX, forceY), Math.atan2(forceY, forceX) * 180 / Math.PI];
    return ans;
 }