//模拟ajax数据
export const ajax = function(_pro={}){
    let pro = {
        //url
        url:_pro.url||'',
        data:_pro.data||{},
        success:_pro.success,
        fail:_pro.fail
    }
    //启动全屏loding
    iView.LoadingBar.start();
    axios.get(`http://127.0.0.1:8080/json/${pro.url}.json`,pro.data)
        .then((response)=>{
            //表示获取成功
            if(response.status==200){
                pro.success&&pro.success(response.data);
            }else{
                pro.success&&pro.fail(response.data);
            }
            iView.LoadingBar.finish()
        })
        //服务器出现问题
        .catch(function (error) {
            pro.fail&&pro.fail(error);
            iView.Message.error(error.toString())
            iView.LoadingBar.finish()
          });
}