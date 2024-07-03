function isEmpty(value) {
    // Check for null or undefined
    if (value == null) {
      return true;
    }
  
    // Check for empty array or string
    if (Array.isArray(value) || typeof value === 'string') {
      return value.length === 0;
    }
  
    // Check for empty object
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
  
    return false;
  }
  
  // Examples
  console.log(isEmpty(null)); // true
  console.log(isEmpty(undefined)); // true
  console.log(isEmpty('')); // true
  console.log(isEmpty([])); // true
  console.log(isEmpty({})); // true
  console.log(isEmpty('hello')); // false
  console.log(isEmpty([1, 2, 3])); // false
  console.log(isEmpty({ a: 1 })); // false
  