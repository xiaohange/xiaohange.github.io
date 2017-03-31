// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.directive('tooltip', function (el, binding) {
  // eslint-disable-next-line
  $(el).attr('data-toggle', 'tooltip')
  .attr('data-title', binding.value)
  .attr('data-placement', binding.arg)
  .tooltip()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
