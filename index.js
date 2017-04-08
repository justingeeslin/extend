function extend(a, b) {
  a._super = b
  for(var key in b)
      if(b.hasOwnProperty(key))
          a[key] = b[key];
  return a;
}

module.exports = extend;
