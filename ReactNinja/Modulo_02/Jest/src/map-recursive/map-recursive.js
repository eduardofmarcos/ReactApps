// Checking function map with recursiveness

let map = (arr = [], func = (item, index) => index) => {
  return (function mapInternal(arrInternal, cont) {
    return arrInternal.length === 0
      ? []
      : [
          func(arrInternal[0], cont, arr),
          ...mapInternal(arrInternal.slice(1), cont + 1),
        ];
  })(arr, 0);
};

export default map;
