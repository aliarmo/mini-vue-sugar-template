<template>
  <div class="userinput">
    <span>组件-{{name}}</span>
    用户名：
    <input class="enter" @change="onChange">
    <div>{{userInput}}</div>
  </div>
</template>

<script>
Component({
  data: {
    name: "UserInput",
    userInput: ""
  },
  methods: {
    onChange(e) {
      console.log("onChange", e);
      this.setData({
        userInput: e.detail.value
      });
    }
  }
});
</script>

<style>
.enter {
  width: 100px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid green;
}
.userinput {
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
</style>
