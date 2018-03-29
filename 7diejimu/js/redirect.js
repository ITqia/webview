 window.myRedirectTo=function(argument) {
  // body...
    wx.miniProgram.redirectTo({ url: '../index/index?score='+argument});
}