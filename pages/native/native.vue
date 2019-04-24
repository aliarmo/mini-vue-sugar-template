<template>
  <div>
    <div>小程序独有的组件还是用独有组件名称，例如：</div>
    <picker-view
      indicator-style="height: 50px;"
      style="width: 100%; height: 300px;"
      :value="value"
      @change="bindChange"
    >
      <picker-view-column>
        <view v-for="(item,index) in years" :key="index" style="line-height: 50px">{{item}}年</view>
      </picker-view-column>

      <picker-view-column>
        <view v-for="(item,index) in months" :key="index" style="line-height: 50px">{{item}}月</view>
      </picker-view-column>

      <picker-view-column>
        <view v-for="(item,index) in days" :key="index" style="line-height: 50px">{{item}}日</view>
      </picker-view-column>
    </picker-view>
  </div>
</template>
<script>
const date = new Date();
const years = [];
const months = [];
const days = [];

for (let i = 2017; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (let i = 1; i <= 12; i++) {
  months.push(i);
}

for (let i = 1; i <= 31; i++) {
  days.push(i);
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1]
  },
  bindChange(e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
  }
});
</script>
