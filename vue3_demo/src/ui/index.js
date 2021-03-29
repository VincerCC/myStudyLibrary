import myButton from '@/ui/myButton'
import myInput from '@/ui/myInput'

const componentList = [
  myButton,
  myInput
]

export default {
  install(app, options){
    // main.js中 app.use(ui, ['myButton', 'myInput'])
    // options就是['myButton', 'myInput']
    if(options){
      // 如果有options，按需引入组件
      options.forEach((o) => {
        componentList.forEach((comp) => {
          if(o === comp.name){
            app.component(comp.name, comp)
          }
        })
      })
    } else {
      // 全部引入
      componentList.forEach((item) => {
        console.log(item,'item')
        app.component(item.name, item)
      })
    }
    console.log(options,'options')
    console.log(app,'app')
  }
}