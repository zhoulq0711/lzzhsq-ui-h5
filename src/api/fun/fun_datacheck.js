

export function  getFormatDateTime(time) {

  var Da = new Date(time)
  var y = Da.getFullYear();
  var m = Da.getMonth() + 1;
  var d = Da.getDate();
  var H = Da.getHours();
  var mm = Da.getMinutes();
  var ss = Da.getSeconds();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  H = H < 10 ? "0" + H : H;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  return y + "-" + m + "-" + d + " " + H + ":" + mm+":" + ss;
}

export function  getFormatDate(time) {

  var Da = new Date(time)
  var y = Da.getFullYear();
  var m = Da.getMonth() +1;
  var d = Da.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d ;

}


export function  getCurrDateTime() {

  var Da = new Date()
  var y = Da.getFullYear();
  var m = Da.getMonth() + 1;
  var d = Da.getDate();
  var H = Da.getHours();
  var mm = Da.getMinutes();
  var ss = Da.getSeconds();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  H = H < 10 ? "0" + H : H;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  return y + "-" + m + "-" + d + " " + H + ":" + mm+":" + ss;
}

export function  getCurrDate() {

 var Da = new Date()
  var y = Da.getFullYear();
  var m = Da.getMonth() +1;
  var d = Da.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d ;

}

export function checkPhone(e){
  console.log(e)
  var phone = e;
  var telReg = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
  if(telReg == false){
    alert("手机号码有误，请重填");
    return false;
  }else{
    return true
  }
}
export async function isCardID(rule, value, callback) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
    callback(new Error("你输入的身份证长度或格式错误"));
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  if (!aCity[parseInt(value.substr(0, 2))]) {
    await callback(new Error("你的身份证地区非法"));
  }

  // 出生日期验证
  var sBirthday = (
          value.substr(6, 4) +
          "-" +
          Number(value.substr(10, 2)) +
          "-" +
          Number(value.substr(12, 2))
      ).replace(/-/g, "/"),
      d = new Date(sBirthday);
  if (
      sBirthday !=
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
  ) {
    await callback(new Error("身份证上的出生日期非法"));
  }

  // 身份证号码校验
  var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432";
  for (var i = 0; i < value.length - 1; i++) {
    sum += value[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (value[value.length - 1] != last) {
    await callback(new Error("你输入的身份证号非法"));
  }
  callback();
}


