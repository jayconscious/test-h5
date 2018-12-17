import Vue from 'vue'
import msgboxVue from './Tip.vue'

var instance = null
var MessageBoxConstructor = Vue.extend(msgboxVue)

const defaultCallback = action => {
  console.log(action)
}

var initInstance = function () {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
}

var showNextMsg = function (options, callback) {
  initInstance()
  console.log(instance)
  document.body.appendChild(instance.$el)
  for (var prop in options) {
    instance[prop] = options[prop]
  }
  if (callback === undefined) {
    instance.callback = defaultCallback
  } else {
    instance.callback = callback
  }
  Vue.nextTick(() => {
    instance.value = true
  })
  console.log('dom渲染结束')
}

var MessageBox = function (options, callback) {
  showNextMsg(options, callback)
}
export default MessageBox