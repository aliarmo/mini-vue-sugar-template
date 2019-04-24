<template>
  <div class="container">
    <div>首页-{{currTime}}</div>
    <button @click="formate">formate time</button>
    <UserInfo v-show="isShowUser" :userinfo="userinfo"></UserInfo>
    <button class="btn" @click="onClick">click to toggle</button>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">{{item.name}}:{{index}}</li>
    </ul>
    <navigator url="/pages/native/native" open-type="switchTab" class="switch">切换到native页面</navigator>
  </div>
</template>

<script>
import UserInfo from "/component/userinfo/userinfo.vue";

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
</script>
<style>
.list {
  border: 1px solid red;
  margin-top: 10px;
}
.switch {
  margin-top: 20px;
}
</style>
