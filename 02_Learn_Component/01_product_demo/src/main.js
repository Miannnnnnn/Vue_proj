// import { createApp } from 'vue'
import { createApp } from 'vue'
// import App from './App.vue'
import App from './components/demo.vue'
import ProductItem from "./components/ProductItem.vue"

const app = createApp(App)

app.component("product-item", ProductItem)

app.mount('#app')
