function cookingTime(eggs) {
  if (eggs === 0){return 0};
  let times = Math.ceil(eggs/8) * 5;
  return times;
}