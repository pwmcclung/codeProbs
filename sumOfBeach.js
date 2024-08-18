function sumOfABeach(beach) {
    let beachSand  = [...beach.toLowerCase().matchAll(/sand/g)];
    let beachFish = [...beach.toLowerCase().matchAll(/fish/g)];
    let beachSun = [...beach.toLowerCase().matchAll(/sun/g)];
    let beachWater = [...beach.toLowerCase().matchAll(/water/g)];
    return beachSand.length + beachSun.length + beachFish.length + beachWater.length;
  }