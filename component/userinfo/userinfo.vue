<template>
  <div class="userinfo">
    <div class="header">组件-{{name}}</div>
    <div v-if="userinfo">
      <p>{{userinfo.username}}</p>
      <span>{{userinfo.password}}</span>
    </div>
    <UserInput></UserInput>
  </div>
</template>

<script>
import UserInput from "/component/userinput/userinput.vue";

Component({
  data: {
    name: "UserInfo"
  },
  properties: {
    userinfo: {
      type: Object,
      vaule: ""
    }
  }
});
</script>

<style>
.header {
  color: red;
}

.userinfo {
  border: 1px solid red;
  padding: 10px;
  margin-top: 20px;
}
</style>

