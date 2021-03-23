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
  },
  // 解析 URL Params 为对象
  parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
      if (/=/.test(param)) { // 处理有 value 的参数
        let [key, val] = param.split('='); // 分割 key 和 value
        val = decodeURIComponent(val); // 解码
        val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
  
        if (Object.prototype.hasOwnProperty.call(paramsObj,key)) { // 如果对象有 key，则添加一个值
          paramsObj[key] = [].concat(paramsObj[key], val);
        } else { // 如果对象没有这个 key，创建 key 并设置值
          paramsObj[key] = val;
        }
      } else { // 处理没有 value 的参数
        paramsObj[param] = true;
      }
    })
    return paramsObj;
  },
  // 实现千位分隔符
  parseToMoney(num) {
    let [integer, decimal] = String.prototype.split.call(num, '.');
    integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
    return integer  + (decimal ? ( '.' + decimal) : '');
  },
  // 验证手机号码
  isPhone(tel) {
    var regx = /^1[34578]\d{9}$/;
    return regx.test(tel);
  },
  // 验证邮箱
  isEmail(email) {
    var regx = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return regx.test(email);
  },
  // 验证身份证
  isCardNo(number) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regx.test(number);
  }
}
export default UTILS;