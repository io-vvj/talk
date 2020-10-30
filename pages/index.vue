<template>
  <section class="container">
    <div>
      <p>通过Nuxt.js服务端渲染框架实现一个模态对话框的UI组件开发，对话框中间可以显示自定义的正文，正文内容是：“我是正文内容”。底部一个取消按钮，一个确定按钮。点取消可以出现一个提醒“您取消了”，点确定可以出现一个提醒“您确定了”。</p>
      <button @click="submit">开始</button>
      <talk :show-talk="showTalk" :msg="msg" @close-talk="closeTalk"></talk>
    </div>
  </section>
</template>

<script>
// import Talk from '~/components/Talk.vue'

export default {
  data() {
    return {
      showTalk: false,
      msg: "我是正文内容",
    };
  },
  methods: {
    submit() {
      this.showTalk = !this.showTalk;
    },
    closeTalk(data) {
      //关闭对话框
      this.showTalk = false;
      this.showAlert = false;
      //刷新页面 因为动画弹窗需要刷新页面才能重新加载 ，
      setTimeout("window.location.reload()", 6000);
      console.log(data);
    },
  },
};
</script>
 
<style>
.container {
  color: #515a6e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
}
p{
  font-size: 15px;
  padding: 20% 10%;
}
button {
  width: 100px;
  font-size: 17px;
  background-color: white;
  border: 2px solid;
 
  border: 1px solid #ffd77a;
  background-color: #fff9e6;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 10px 18px;
  border-radius: 5px;
  margin: 3px 12px;
  letter-spacing: 2px;
}
</style>

