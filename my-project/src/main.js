import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

function a(a,d){
  console.log(a)
  console.log('-------------')
  console.log(d)
}

Vue.prototype.$con=a

const app = new Vue({
  ...App
})
app.$mount()
