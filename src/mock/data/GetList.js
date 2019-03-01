import {getQueryString} from '@/libs/util.js'
let funObj = {
   
}
export const GetList = res =>{
    // console.log(res);
    let obj =  getQueryString(res.body);
    if(funObj[obj.docType+obj.actionType]){
        return funObj[obj.docType+obj.actionType](obj)
    }else{
        return {"ErrorCode":-1,"msg":"测试接口尚未配置","success":false}
    }
}