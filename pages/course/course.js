Page({
  data:{
    course:[],
  },
  onLoad:function(options){
    this.getData(options.id);
  },
  getData:function(id){
    wx.request({
      url:"http://localhost:3000/api/course/"+id,
      success:(res)=>{
        console.log(res.data.data[0])
        this.setData({
          course:res.data.data[0]
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
})