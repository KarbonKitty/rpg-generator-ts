function randomFromObject(obj: any) {
  const keys = Object.keys(obj);
  return obj[keys[(Math.random() * keys.length) << 0]];
}

function randomFromWeighted(obj: any) {
  let weight = 0;
  for (let prop in obj) {
    weight += obj[prop];
  }
  let accumulator = 0;
  const random = Math.random() * weight;
  for (let prop in obj) {
    accumulator += obj[prop];
    if ( accumulator > random ) {
      return prop;
    }
  }
  return '';
}

export { randomFromObject, randomFromWeighted };