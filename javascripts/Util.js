const Util = new (function () {
  /**
   * Change Decimal Number to Hexadecimal (within 0 ~ 255)
   * @param dec
   * @returns {string}
   */
  this.dec2Hex256 = dec => {
    return (dec <= 16 ? '0' : '') + Math.floor(dec).toString(16);
  };

  this.hex256toDec = hex256 => {
    return parseInt(hex256, 16);
  }

  /**
   * Change from [min, max] to [0, 1]
   * @param val
   * @param min
   * @param max
   */
  this.getRelativeVal = (val, min, max) => {
    return (val - min) / (max - min);
  };

  /**
   * Change from [0, 1] to [min, max]
   * @param ratio
   * @param min
   * @param max
   * @returns {*}
   */
  this.getAbsoluteVal = (ratio, min, max) => {
    return (max - min) * ratio + min;
  };

  this.roundFrom = (number, decimalPlaces = 3) => {
    const k = Math.pow(10, decimalPlaces);
    return Math.round(number * k) / k;
  }

  this.getTime = () => {
    return new Date().getTime();
  };

  this.getTimeDiffFrom = fromTime => {
    const toTime = new Date().getTime();
    return (toTime - fromTime) / 1000; // milli second
  };

  this.equalElemInArray = (_arr1, _arr2) => {
    if (
      !Array.isArray(_arr1) ||
      !Array.isArray(_arr2) ||
      _arr1.length !== _arr2.length
    )
      return false;

    let arr1 = _arr1.concat().sort();
    let arr2 = _arr2.concat().sort();

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  };

  this.sortObjsBy = (objs, key) => {
    return _.sortBy(objs, [
      o => {
        return o[key];
      }
    ]);
  };

  this.downloadJson = obj => {
    let strObj = JSON.stringify(obj);
    let blob = new Blob([strObj], { type: 'text/plain;charset=utf-8' });
    // saveAs(blob, filename+".json");
  };

  this.shuffle = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const fromIdx = Math.floor(Math.random() * len);
      const toIdx = Math.floor(Math.random() * len);
      const temp = arr[fromIdx];
      arr[fromIdx] = arr[toIdx];
      arr[toIdx] = temp;
    }
    return arr;
  };

  this.getRandomIntWithout = (without, from, to) => {
    const list = [];
    for (let idx = from; idx < to; idx++) {
      if (_.indexOf(without, idx) === -1) list.push(idx);
    }
    const randomIdx = Math.floor(Math.random() * list.length);
    return list[randomIdx];
  };

  return this;
})();
