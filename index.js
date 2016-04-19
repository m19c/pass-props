function flatten(array) {
  return array.reduce((previous, current) => {
    var items = Array.isArray(current) ? flatten(current) : [current];
    return previous.concat(items);
  }, []);
}

export default (props, ...pass) => {
  let key;

  props = Object.assign({}, props);
  pass = flatten(pass);

  for (key in props) {
    if (pass.indexOf(key) >= 0) {
      continue;
    }

    delete props[key];
  }

  return props;
};
