/**
 * 姓名数据脱敏
 * 脱敏规则：两个字的，脱第二个字，比如王*；三个字，保留第一个字和最后一个字，比如李*芳；四个字及以上，保留前两个字和最后一个字，比如上官**野
 * @param {*} name 姓名
 */
export function protectName(name) {
  if (name) {
    if (name.length >= 4) {
      return (
        name.slice(0, 2).padEnd(name.length - 1, "*") + name[name.length - 1]
      );
    }
    if (name.length >= 3) {
      return (
        name.slice(0, 1).padEnd(name.length - 1, "*") + name[name.length - 1]
      );
    }
    if (name.length >= 2) {
      return name.slice(0, 1).padEnd(name.length, "*");
    }
    return name;
  }
}
