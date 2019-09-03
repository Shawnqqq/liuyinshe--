Page({
  data:{
    userInfo:[]
  },
  onLoad:function(options){
    this.getData(options.id)
  },
  getData:function(id){
    wx.request({
      url:"http://localhost:3000/api/user/"+id,
      success:(res)=>{
        switch (res.data.data.sex){
          case 1 :
            res.data.data.sex='男'
            break
          case 2 :
            res.data.data.sex='女'
        }
        this.setData({
          userInfo:res.data.data
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
})