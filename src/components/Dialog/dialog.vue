<template>
<div v-if="showAlert" class="modal-wrap" ref="modal" @click="close('')" v-cloak>
  <div class="modal-inner">
    <p class="title">{{ showCon.title }} <span v-if="showType == '3'">{{ driverName }}</span></p>
    <p class="tip-first">{{ showCon.first }}</p>
    <p class="tip-second">{{ showCon.second }}</p>
    <div v-if="showType == '1'" class="btn-wrap">
      <button class="btn cancel" @click="close('')">取消</button>
      <button class="btn comfirm" @click="confirm('confirm')">退队</button>
    </div>
    <div v-else class="konw-btn" @click="confirm('confirm')">我知道了</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      driverName: '曹师傅',
      showAlert: false,
      // 1 换队  2 时间到  3 踢出队员
      showType: '1',
      content: {
        // 队伍的转换
        '1': {
          title: '是否转换队伍',
          first: '您原来已有队伍，确定退出',
          second: '并加入此队伍吗?'
        },
        // 时间过期
        '2': {
          title: '无法加入',
          first: '抱歉，组队时间以截至，您',
          second: '无法加入其它队伍'
        },
        // 踢出队员
        '3': {
          title: '踢出队员',
          first: '您确定要把',
          second: '踢出队伍吗？'
        }
      }
    }
  },
  computed: {
    showCon() {
      return this.content[this.showType]
    }
  },
  methods: {
    close(act) {
      this.showAlert = false
      this.callback('cancel')
    },
    confirm(action) {
      this.showAlert = false
      this.callback(action)
    }
  }
};
</script>

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
  // background-image: url('../../assets/modal.png');
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
