function _without(array, ...values) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
  
    return array.filter(item => !values.includes(item));
  }