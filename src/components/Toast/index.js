/* eslint-disable no-alert, no-console */
import Vue from 'vue'
/* eslint-disable no-alert, no-console */
import ToastBox from './Toast.vue'

let toastInstant = null
const ToastComponent = Vue.extend(ToastBox)

/*eslint-env node*/
const defaultCallback = action => typeof action === 'string' ? console.log(action) : console.log(JSON.stringify(action))

const Toast = (options, callback) => {
  toastInstant = new ToastComponent({
    el: document.createElement('div')
  })
  document.body.appendChild(toastInstant.$el)
  if (typeof options === 'object') {
    for (const option in options) {
      toastInstant[option] = options[option]
    }
  }
  callback === undefined
  ? toastInstant.callback = defaultCallback
  : toastInstant.callback = callback
  Vue.nextTick(() => {
    // instance.value = true
    console.log('dom渲染结束')
  })
}

export default Toast

