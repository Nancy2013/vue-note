import numeral from 'numeral';
/**
 * 千分制数值转换
 * @param {*} value 数值
 * @param {*} decimals 小数位
 * @param {*} convertToNumber 是否转为为数字
 * @returns 
 */
export function formatNumber(value, decimals = 2, convertToNumber = false) {
    let initValue=value;
    if (initValue) {
      let formatVlaue;
      if (convertToNumber) {
        // 转换成数值格式
        formatVlaue = numeral(initValue)._value;
      } else {
        // 转换成千分制
        initValue = parseFloat(value); // 转换为数值
        let formater = '0,0';
        if (`${value}`.includes('.')) {
          // 有小数
          for (let i = 0; i < decimals; i++) {
            if (i === 0) {
              formater += '.0';
            } else {
              formater += '0';
            }
          }
        }
        formatVlaue = numeral(initValue).format(formater);
      }
      return formatVlaue;
    }
}