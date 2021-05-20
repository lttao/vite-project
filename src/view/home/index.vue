<template>
  <div style="width: 100%; height: 100px; background: red; border-radius: 10px; margin: 0 auto; font-size: 20px; color: red">home</div>
  <input type="text" />
</template>

<script>
export default {
  setup() {},
  created() {
    let a = { b: 1 }

    let { b } = a
    let arr = [1, 2, 5, 6]
    console.log(1)
    this.pro()
      .then((res) => {
        console.log(res)
      })
      .catch(() => {})
    wx.navigatorTo()
    uni.navigatorTo()
  },
  methods: {
    pro() {
      new Promise((res) => {
        res(1)
      })
    },
  },
}
</script>
