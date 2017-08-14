
// both below from: https://stackoverflow.com/questions/23808928/javascript-elegant-way-to-check-nested-object-properties-for-null-undefined

// find nested object prop
export const get = (obj, key) => {
  return key.split('.').reduce((o, x) => {
    return (typeof o === 'undefined' || o === null) ? o : o[x];
  }, obj);
}

// check if nested object prop not null
export const has = (obj, key) => {
  return key.split('.').every((x) => {
    if(typeof obj !== 'object' || obj === null || !obj.hasOwnProperty(x)) return false;

    obj = obj[x];
    return true;
  });
}