function addUsername(list) {
    let year = new Date().getFullYear();
    for (let i = 0; i < list.length; i++){
      let first = String(list[i].firstName).toLowerCase();
      let last = String(list[i].lastName)[0].toLowerCase();
      let newYear = year - list[i].age;
      let usr = String(first+last+newYear)
      list[i]['username'] = usr;
    }
    return list;
  }