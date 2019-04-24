import { formateTime } from "../../modules/util";
let app = getApp();
console.log("globalData", app.globalData.scene);
Page({
  data: {
    currTime: Date.now(),
    userinfo: {
      username: "aliarmo",
      password: "123456"
    },
    isShowUser: true,
    list: [{ name: "name1" }, { name: "name2" }]
  },
  onClick(e) {
    console.log("toggle", e);
    this.setData({
      isShowUser: !this.data.isShowUser
    });
  },
  formate() {
    this.setData({
      currTime: formateTime(new Date())
    });
  }
});