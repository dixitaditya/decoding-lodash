function _merge(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
      throw new TypeError('Expected a target object');
    }
  
    sources.forEach(source => {
      if (typeof source === 'object' && source !== null) {
        Object.keys(source).forEach(key => {
          const sourceValue = source[key];
          const targetValue = target[key];
  
          if (Array.isArray(sourceValue)) {
            if (!Array.isArray(targetValue)) {
              target[key] = [];
            }
            target[key] = target[key].concat(sourceValue);
          } else if (typeof sourceValue === 'object' && sourceValue !== null) {
            if (typeof targetValue !== 'object' || targetValue === null) {
              target[key] = {};
            }
            _merge(target[key], sourceValue);
          } else {
            target[key] = sourceValue;
          }
        });
      }
    });
  
    return target;
  }
  