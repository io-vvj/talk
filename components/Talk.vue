<template >
  <div>
    <div class="talk" v-if="showTalk">
      <div class="talk_mask"></div>
      <div class="talk_container">
        <div class="talk_content">
          <div class="talk_content_top" v-text="msg">提示内容</div>
          <div class="talk_btn">
            <a href="javascript:;" class="btn" @click="submitbtn">确定</a>
            <a href="javascript:;" class="btn" @click="quitbtn">取消</a>
          </div>
        </div>
      </div>
    </div>
    <div id="alert " class="alert"  v-if="showAlert">
      <span>{{ alertmsg }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    showTalk: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      alertmsg: "",
      showAlert: false,
      classAlert: "",
    };
  },
  methods: {
    submitbtn() {
      this.alertmsg = "您确定了";
      this.showAlert = true;
    
      // setTimeout("alert('对不起, 要你久候')", 60);
      this.$emit("close-talk", this.alertmsg);
    },
    quitbtn() {
      this.alertmsg = "您取消了";
      this.showAlert = true;
      
      // setTimeout("this.animation = ''", 60);
      this.$emit("close-talk", this.alertmsg);
    },
  },
};
</script>
<style>
.talk {
  font-size: 17px;
}
.talk_mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.talk_container {
  background: #fff;
  width: 80%;
  height: 20%;
  position: fixed;
  top: 40%;
  left: 10%;
  border-radius: 10px;
  margin: 0 auto;
}
.talk_content {
  letter-spacing: 1px;
  text-align: center;
  padding-top: 13%;
}
.talk_btn {
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0px;
}
.talk_btn a {
  letter-spacing: 2px;
  flex: 1;
  background: #fff9e6;
  margin: 10px 20px;
  padding: 5px 30px;
  border-radius: 5px;
  border: 1px solid #ffd77a;
  color: #515a6e;
  text-decoration: none;
  display: inline-block;
}

.alert {
  letter-spacing: 2px;
  position: fixed;
  top: -60px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding: 15px;
  color: #515a6e;
  border: 1px solid #ffd77a;
  background-color: #fff9e6;
  animation: mymove 6s infinite;
  -webkit-animation: mymove 6s infinite;
  animation-iteration-count: 1;
  /* -moz-animation-iteration-count: 1;/*动画只执行一次*/
  -webkit-animation-iteration-count: 1;
  -o-animation-iteration-count: 1;
}

/* .alert .animation { */
/*Safari and Chrome*/

/* } */
@keyframes mymove {
  0% {
    top: -50px;
  }

  40% {
    top: 0px;
  }
  60% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  0% {
    top: -50px;
  }

  40% {
    top: 0px;
  }
  60% {
    top: 0px;
  }
  100% {
    top: -60px;
  }
}
.alert span {
  font-size: 17px;
}
</style>

