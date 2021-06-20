/*
代码生成:xk.徐柯@产品研发五部
编写时间:2021/6/16
业务功能描述:T_SQJW_XLGJXX
 */
import request from '@/router/axios'
import {isCardID,checkPhone} from "@/api/fun/fun_datacheck";
  // 数据定义区 
export function getJsonData(){
    return {
      realHeight: 200,
      ifedit: false,
      userInfo: "",
      formVisible: true,
      editdata: "",
      form: {   //form 数据区
 						    dsbm:"", //地市编码
 						    gjbm:"", //轨迹编码
 						    xlpbbm:"", //巡逻排班编码tSqjwXlpbxx
 						    xlpbmc:"", //巡逻排班名称
 						    xlxlbm:"", //巡逻线路编码tSqjwXlxlxx
 						    xlxlmc:"", //巡逻线路名称
 						    dksj:"", //打卡时间
 						    yxbs:"", //有效标示
 						    djdwGajgjgdm:"", //登记单位公安机关机构代码
 						    djdwGajgmc:"", //登记单位公安机关名称
 						    djrYhbh:"", //登记人用户编号
 						    djrGmsfhm:"", //登记人公民身份号码
 						    djrXm:"", //登记人姓名
 						    djsj:"", //登记时间
 						    sbbzWw:"", //上报互连网标志
 						    sbsjWw:"", //上报互连网时间
 						    sbbzZww:"", //上报政务网标志
 						    sbsjZww:"", //上报政务网时间
 						    xfbzDsxt:"", //下发地市系统标志
 						    xfsjDsxt:"", //下发地市系统时间
       },
       prompt: {  //输入提示区
      			   	 dsbm_hint:"请输入地市编码",
      			   	 gjbm_hint:"请输入轨迹编码",
      			   	 xlpbbm_hint:"请输入巡逻排班编码t_sqjw_xlpbxx",
      			   	 xlpbmc_hint:"请输入巡逻排班名称",
      			   	 xlxlbm_hint:"请输入巡逻线路编码t_sqjw_xlxlxx",
      			   	 xlxlmc_hint:"请输入巡逻线路名称",
      			   	 dksj_hint:"请输入打卡时间",
      			   	 yxbs_hint:"请输入有效标示",
      			   	 djdwGajgjgdm_hint:"请输入登记单位_公安机关机构代码",
      			   	 djdwGajgmc_hint:"请输入登记单位_公安机关名称",
      			   	 djrYhbh_hint:"请输入登记人_用户编号",
      			   	 djrGmsfhm_hint:"请输入登记人_公民身份号码",
      			   	 djrXm_hint:"请输入登记人_姓名",
      			   	 djsj_hint:"请输入登记时间",
      			   	 sbbzWw_hint:"请输入上报互连网标志",
      			   	 sbsjWw_hint:"请输入上报互连网时间",
      			   	 sbbzZww_hint:"请输入上报政务网标志",
      			   	 sbsjZww_hint:"请输入上报政务网时间",
      			   	 xfbzDsxt_hint:"请输入下发地市系统标志",
      			   	 xfsjDsxt_hint:"请输入下发地市系统时间",
 				 dsbm_hint:"请输入地市编码",
 				 gjbm_hint:"请输入轨迹编码",
 				 xlpbbm_hint:"请输入巡逻排班编码t_sqjw_xlpbxx",
 				 xlpbmc_hint:"请输入巡逻排班名称",
 				 xlxlbm_hint:"请输入巡逻线路编码t_sqjw_xlxlxx",
 				 xlxlmc_hint:"请输入巡逻线路名称",
 				 dksj_hint:"请输入打卡时间",
 				 yxbs_hint:"请输入有效标示",
 				 djdwGajgjgdm_hint:"请输入登记单位_公安机关机构代码",
 				 djdwGajgmc_hint:"请输入登记单位_公安机关名称",
 				 djrYhbh_hint:"请输入登记人_用户编号",
 				 djrGmsfhm_hint:"请输入登记人_公民身份号码",
 				 djrXm_hint:"请输入登记人_姓名",
 				 djsj_hint:"请输入登记时间",
 				 sbbzWw_hint:"请输入上报互连网标志",
 				 sbsjWw_hint:"请输入上报互连网时间",
 				 sbbzZww_hint:"请输入上报政务网标志",
 				 sbsjZww_hint:"请输入上报政务网时间",
 				 xfbzDsxt_hint:"请输入下发地市系统标志",
 				 xfsjDsxt_hint:"请输入下发地市系统时间",
            },
      rules: {  //校验规则区
				        dsbm: [
				        ],
				        gjbm: [
				        ],
				        xlpbbm: [
				        ],
				        xlpbmc: [
				        ],
				        xlxlbm: [
				        ],
				        xlxlmc: [
				        ],
				        dksj: [
				        ],
				        yxbs: [
				        ],
				        djdwGajgjgdm: [
				        ],
				        djdwGajgmc: [
				        ],
				        djrYhbh: [
				        ],
				        djrGmsfhm: [
				        ],
				        djrXm: [
				        ],
				        djsj: [
				        ],
				        sbbzWw: [
				        ],
				        sbsjWw: [
				        ],
				        sbbzZww: [
				        ],
				        sbsjZww: [
				        ],
				        xfbzDsxt: [
				        ],
				        xfsjDsxt: [
				        ],
			},
      arr: [],
      adderoptions: "",
      loading: false,
      iflook: false,
      dialogVisible: false, //新增地址打开
      imgsback: [],
      tmp:[],
      nowindex: 0,
      leng: 1,     //以下是H5 使用的变量
      fileArr: [],
            currentDate: new Date(),
            minDate: new Date(1900, 1, 1),
            maxDate: new Date(),
            formtype: "",
            idno: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
            nameReg: /(^([a-zA-Z]+\s)*[a-zA-Z]+$)|(^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·){0,5}(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$)/,
            phoneReg: /(\d{3})([*,\d]{4})(\d{4})/,
 			   showDksj: false,
 			   showDjsj: false,
 			   showSbsjWw: false,
 			   showSbsjZww: false,
 			   showXfsjDsxt: false,
    }
}
   //服务器路由定义区 
export function getServerlistUrl(){
  return  '/lzzhsq/tSqjwXlgjxx/list'
}
//查询
export function list(query) {
  return request({
     url: '/lzzhsq/tSqjwXlgjxx/list',
    method: 'get',
    params: query,
  })
}
/*添加表单保存*/
export function insert(obj) {
  return request({
    url: '/lzzhsq/tSqjwXlgjxx/insert',
    method: 'post',
    data: obj
  })
}
/*编辑表单保存*/
export function update(obj) {
  return request({
    url: '/lzzhsq/tSqjwXlgjxx/update',
    method: 'post',
    data: obj
  })
}
/*删除*/
export function cancel(obj) {
  return request({
    url: '/lzzhsq/tSqjwXlgjxx/cancel',
    method: 'get',
    params:{'pk':obj} 
  })
}
/*获取信息统计*/
export function totalInfo(obj) {
  return request({
    url: '/lzzhsq/mpp/totalInfo',
    method: 'post',
    data: obj
  })
}
/*单条详细信息*/
export function detail(obj) {
  return request({
    url: '/lzzhsq/tSqjwXlgjxx/detail',
    method: 'get',
    params:{'pk':obj} 
  })
}
/*地址选择*/
export function addrSearch(obj) {
  return request({
    url: '/lzzhsq/addrSearch',
    method: 'get',
    params: {
      queryStr: obj
    }
  })
}
