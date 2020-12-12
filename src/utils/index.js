const UTILS = {
  /**
   * 节流
   * @param {执行的函数} func 
   * @param {*等待的时间} waitTime 
   */
  throttle(func, waitTime) {
    let timeout;
    return function () {
      let _this = this;
      let args = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = null;
          func.apply(_this, args)
        }, waitTime)
      }

    }
  },
  /**
   * 防抖
   * @param {函数} func 
   * @param {时间} waitTime 
   */
  debounce(func, waitTime) {
    let timeout;
    return function () {
      let _this = this,
        args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(function () {
        func.apply(_this, args)
      }, waitTime);
    }
  },
  deepClone(target) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(target) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是 
    if (target && typeof target === "object") {
      for (var key in target) {
        // if (target.hasOwnProperty(key)) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          if (target[key] && typeof target[key] === "object") {
            objClone[key] = this.deepClone(target[key]);
          } else {
            objClone[key] = target[key];
          }
        }
      }
    }
    return objClone;
  },
  guid(){// 生成唯一的UUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
      var r = Math.random()*16 | 0,
      v = c=='x'? r:(r & 0x3 | 0x8);
      return v.toString(16);
    })
  }
}
export default UTILS;