<template>
  <div id="app">
    <div class="container">
      <div class="page">
        <input class="inp" type="text" v-model="text">
        <div class="btn">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')
  var ele = document.getElementsByClassName('page')[0],
      wid = document.body.clientWidth ||  window.innerWidth,
      hei = document.body.clientHeight || window.innerHeight
      console.log(wid)
      console.log(hei)

  ele.style.cssText = 'width:' + wid + 'px;height:' + hei + 'px;'
  // console.log(ele.style)
  console.log('width %d, height %d', wid, hei)
}, false)
// $(document).ready(function () {
//     $('.page').css({'width':$(window).width(),'height':$(window).height()});
// });

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
.container {
  width: 100%;
  height: 100%;
}
.page {
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0; */
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url('https://sunrise-background.zh.russianwomen.club/%E8%83%8C%E6%99%AF-750-1334/%E5%AE%83%E6%98%AF%E5%A4%AA%E9%98%B3%EF%BC%9F-%E6%97%A5%E5%87%BA%E8%83%8C%E6%99%AF-4.jpg');
  background-color: brown;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.inp {
  margin-top: 2rem;
  background: red;
  width: 3rem;
  height: 2rem;
  outline: none;
  border: 0;
}
.btn {
  font-size: 0.32rem;
  width: 2rem;
  height: 0.5rem;
  background: orange;
  border-radius: 0.2rem;
  margin: 5rem auto;
}
</style>
