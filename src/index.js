
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0)
  return 0;
  else return Math.min(...array);
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0)
  return 0;
  else return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0)
  return 0;
  else {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer) / array.length;
  }
}
