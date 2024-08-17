function _compact(array) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
  
    return array.filter(Boolean);
  }