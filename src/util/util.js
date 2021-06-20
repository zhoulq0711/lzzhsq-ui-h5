
// export const idnoReg = /^ [1 - 9]\d{ 5}(18 | 19 | 20 | (3\d)) \d{ 2 } ((0[1 - 9]) | (1[0 - 2]))(([0 - 2][1 - 9]) | 10 | 20 | 30 | 31) \d{ 3 } [0 - 9Xx]$ /;
// // export const idnoReg = /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/
// export function idnoVerify(val) {
//     const idnoReg = /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/
//     if (!idnoReg.test(val)) {
//         return false;
//     }
// }

/**
 * 生成随机len位数字
 */
 export const randomLenNum = (len, date) => {
    let random = ''
    random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len || 4)
    if (date) random = random + Date.now()
    return random
  }