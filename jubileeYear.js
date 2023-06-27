function isJubilee(year) {
  let dateYear = new Date(String(year) + '-07-25');
  let day = dateYear.getDay();
  if (day === 0){
    return true;
  }
  return false;
}