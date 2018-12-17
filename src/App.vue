<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      text: ''  
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
