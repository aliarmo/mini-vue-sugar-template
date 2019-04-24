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