import { App } from 'vue'
import HelloWord from './packages/helloword/myHello.vue'
import ButtonType from './packages/button/myButton.vue'

function install(app: App) {
  const packages = [HelloWord, ButtonType]
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
