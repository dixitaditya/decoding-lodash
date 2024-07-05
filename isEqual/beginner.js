function _isEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }

  if (value1 == null || value2 == null || typeof value1 !== 'object' || typeof value2 !== 'object') {
    return false;
  }

  if (Array.isArray(value1) !== Array.isArray(value2)) {
    return false;
  }

  var keys1 = Object.keys(value1);
  var keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (!_isEqual(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
