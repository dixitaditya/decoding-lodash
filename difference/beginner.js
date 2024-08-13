function _difference(array, ...values) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected the first argument to be an array');
    }
    
    // Flatten the values arrays into a single array
    const valuesFlattened = values.flat();
  
    // Create a Set from the flattened values for faster lookup
    const valuesSet = new Set(valuesFlattened);
  
    // Return an array with items from `array` that are not in `valuesSet`
    return array.filter(item => !valuesSet.has(item));
  }