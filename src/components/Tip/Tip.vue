<template>
<div class="message-module" v-if="showAlert" ref="message" @click="hideBox" v-cloak>
  <div class="message-wrap" @click.stop="stop">
    <div class="msg-title border-bottom-1px" v-if="title">{{title}}</div>
    <div class="msg-wrap">
      <div class="icon" v-if="icon">
        <img :src="icon" alt="" class="icon-img">
        </div>
        <div class="msg" :class="{highlight: msgHighlight}">{{msg}}</div>
      </div>
      <div class="btn-wrap border-top-1px">
        <button class="btn cancel border-right-1px" v-if="cancelBtnText">{{cancelBtnText}}</button>
        <button class="btn confirm" @click="confirm('confirm')">{{confirmBtnText}}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
[v-cloak] {
  display: none;
}

.message-module {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  .message-wrap {
    border-radius: 6px;
    background: #fff;
    position: relative;
    width: 5.77rem;

    .msg-title {
      font-size: .28rem;
      line-height: .4rem;
      padding: .43rem 0 .36rem;
      text-align: center;
    }

    .msg-wrap {
      padding: .59rem 0 .5rem 0;

      .icon {
        width: 1.02rem;
        height: 1.02rem;
        text-align: center;
        margin: 0 auto .24rem;

        .icon-img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      .msg {
        font-size: .28rem;
        line-height: .4rem;
        text-align: center;
      }

      .highlight {
        font-size: .72rem;
        line-height: 1rem;
      }
    }

    .btn-wrap {
      border-radius: 6px;
      display: flex;

      .btn {
        border-radius: 6px;
        display: block;
        width: 100%;
        background: #fff;
        padding: .32rem 0;
        font-size: .36rem;
        line-height: .5rem;
        color: #fc9153;
        text-align: center;
        border: none;
      }

      .cancel {
        color: #999;
      }
    }
  }
}

.message-module:before {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.4;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

<script>
export default {
  methods: {
    open() {
      this.showAlert = true
    },
    confirm(action) {
      this.showAlert = false
      this.callback(action)
    },
    hideBox() {
      this.showAlert = false
    },
    stop() {}
  },
  data() {
    return {
      showAlert: true,
      msg: '',
      title: '',
      icon: '',
      btnText: '',
      confirmBtnText: '确认',
      cancelBtnText: '',
      msgHighlight: false,
      callback: null
    }
  }
}
</script>
