Page({
  data:{
    inputName:'',
    inputPhone:'',
    from:false,
    userInfo:''
  },
  onLoad:function(){
    wx.login({
      success:(res)=>{
        if (res.code){
          wx.request({
            url: 'http://localhost:3000/api/userLogin',
            data: {
              code: res.code,
            },
            success:(res)=>{
              if(res.data.message === "未注册"){
                this.setData({
                  from:true
                })
              }else{
                this.setData({
                  from:false
                })
                this.setData({
                  userInfo:res.data.data
                })
              }
            }
          })
        }else{
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  inputName:function(e){
    this.setData({
      inputName: e.detail.value
    })
  },
  inputPhone:function(e){
    this.setData({
      inputPhone:e.detail.value
    })
  },
  handleLogin:function(){
    let inputName = this.data.inputName;
    let inputPhone = this.data.inputPhone
    if(!inputName || !inputPhone){
      wx.showToast({
        icon:'none',
        title: '缺少输入内容'
      })
      return
    }
    wx.login({
      success:(res)=>{
        if (res.code){
          wx.request({
            url: 'http://localhost:3000/api/userLogon',
            data: {
              code: res.code,
              name: inputName,
              phone: inputPhone
            },
            success:(res)=>{
              if(res.data.code===0){
                wx.showToast({
                  icon:'none',
                  title: res.data.message
                })
              }else if(res.data.code===200){
                this.onLoad()
              }
            }
          })
        }else{
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})
