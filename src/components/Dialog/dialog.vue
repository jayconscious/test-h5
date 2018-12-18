<template>
  <div v-if="showAlert" class="modal-wrap" ref="modal" @click="hideBox('')" v-cloak>
    <div class="modal-inner">
      <p class="title">{{ title }}</p>
      <p class="tip-first">{{ first }}<span v-if="driverName">{{ driverName }}</span></p>
      <p class="tip-second">{{ second }}</p>
      <div v-if="cancelBtnText" class="btn-wrap">
        <button class="btn cancel" @click="hideBox('')">{{ cancelBtnText }}</button>
        <button class="btn comfirm" @click="confirm('confirm')">{{ confirmBtnText }}</button>
      </div>
      <div v-else class="konw-btn" @click="confirm('confirm')">{{ confirmBtnText }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}

.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  z-index: 999;
}

.modal-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5.8rem;
  height: 4.3rem;
  box-sizing: border-box;
  padding-top: 0.12rem;
  background-image: url('../../assets/modal.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.title {
  padding: 0.22rem 0;
  text-align: center;
  font-size: 0.38rem;
  color: #86D5F0;
  font-weight: 500;
}

.tip-first {
  margin-top: 0.52rem;
  font-size: 0.34rem;
  color: #86D5F0;
  text-align: center;
}

.tip-second {
  margin-top: 0.05rem;
  font-size: 0.34rem;
  color: #86D5F0;
  text-align: center;
}

.btn-wrap {
  margin-top: 0.54rem;
}

.btn {
  width: 2.44rem;
  height: 0.8rem;
  box-sizing: border-box;
  text-align: center;
  border: 0.03rem solid rgba(0, 165, 159, 1);
  border-radius: 0.06rem;
  font-size: 0.38rem;
  background: rgba(4, 36, 66, 0.5);
}

.cancel {
  color: #00A59F;
  margin-left: 0.33rem;
}

.comfirm {
  margin-left: 0.25rem;
  color: #040D1A;
  background-color: #00A59F;
}

.konw-btn {
  margin: 0.54rem auto 0;
  width: 4.64rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background-color: #00A59F;
  font-size: 0.38rem;
  color: #040D1A;
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
      first: '',
      second: '',
      driverName: '',
      cancelBtnText: '',
      confirmBtnText: '',
      msgHighlight: false,
      callback: null
    }
  }
}
</script>
