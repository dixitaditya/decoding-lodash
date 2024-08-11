function _flatten(array) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
  
    const result = [];
  
    function flattenDeep(arr) {
      for (const value of arr) {
        if (Array.isArray(value)) {
          flattenDeep(value); // Recursively flatten nested arrays
        } else {
          result.push(value);
        }
      }
    }
  
    flattenDeep(array);
    return result;
  }
  