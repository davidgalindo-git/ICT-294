const { createApp } = Vue

const app = createApp({
  data() {
    return {
      product: 'Training',
      description: 'Vue.js Course'}
  }
})

app.mount('#app')