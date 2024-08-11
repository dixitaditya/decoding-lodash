function _chunk(array, size) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
  
    if (typeof size !== 'number' || size < 1) {
      throw new TypeError('Expected a positive number for size');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
  
    return result;
  }