function _uniq(array) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
    
    // Create a Set from the array to remove duplicates
    return Array.from(new Set(array));
    
  }
  