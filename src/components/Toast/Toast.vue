<template>
    <div v-if="showModal" @click="close" class="toast-wrap">
      <div class="toast-inner">
        <div class="btn" @click="confirm">确 定</div>
      </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
          showModal: false
        }
    },
    computed: {
      
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      confirm () {
        this.showModal = false
        this.callback('confirm')
      },
      close () {
        this.showModal = false
        this.callback('close')
      }
    }
};
</script>

<style scoped lang="scss">
  .toast-wrap {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: .5)
  }
  .toast-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 3rem;
    background: skyblue;
    text-align: center;
  }
  .btn {
    width: 1rem;
    height: 0.5rem;
    background: orange;
    border-radius: 0.2rem;
    color: white;
  }
</style>
