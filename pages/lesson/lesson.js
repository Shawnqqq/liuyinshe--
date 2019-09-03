Page({
  data:{
    class:[],
    lesson:[],
  },
  onLoad:function(options){
    this.getData(options.id,options.user_id)
  },
  getData:function(id,user){
    wx.request({
      url:"http://localhost:3000/api/mini/lesson/"+id+'/'+user,
      success:(res)=>{
        this.setData({
          lesson:res.data.data.lessons
        })
      }
    })
  },
  handleApplyLeave(e){
    let id = e.target.dataset.id;
    let user_id = e.target.dataset.user_id;
    let class_id = e.target.dataset.class_id;
    let lesson_id = e.target.dataset.lesson_id;
    wx.request({
      method:"POST",
      url:"http://localhost:3000/api/mini/leave/"+id,
      data:{
        user_id:user_id,
        class_id:class_id,
        lesson_id:lesson_id
      },
      success:(res)=>{
        wx.showToast({
          title: res.data.message
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
})