
exports.min = function min (array) {
  if (array === undefined || array === [])
  return 0;
  else return Math.min(...array);
}

exports.max = function max (array) {
  if (array === undefined || array === [])
  return 0;
  else return Math.max(...array);
}

exports.avg = function avg (array) {
  if (array === undefined || array === [])
  return 0;
  else return Math.avg(...array);
}
