import { App } from 'vue'
import Hello from './packages/hello/index.vue'
import Button from './packages/button/index.vue'

function install(app: App) {
  const packages = [Hello, Button]
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}
const version = '1.1.0'
export default {
  install,
  version,
}
