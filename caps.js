function capital(capitals){
  let cap = capitals.map(x => `The capital of ${x.state||x.country} is ${x.capital}`);
  return cap;
}