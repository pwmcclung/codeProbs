function conferencePicker (citiesVisited, citiesOffered) {
	let newArr = citiesOffered.filter(x => !citiesVisited.includes(x));
  return newArr[0] || 'No worthwhile conferences this year!';
}