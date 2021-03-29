<template>
  <div class="">
    <div class="changeDiv">
      {{counts}}-{{name}}
      <button @click="change">change</button>
    </div>
  </div>
</template>

<script>
import { watch, ref, onBeforeUpdate, reactive} from 'vue';
export default {
  name: 'watch',
  setup(props,ctx) {
    let counts = ref(1)
    let name = ref('张三')
    let num =  reactive({
      a: 1
    })
    // 每当props更新都会执行watchEffect和watch
    // watchEffect 和 watch 最大区别是，watchEffect初次渲染也会触发，而watch是在监听值改变后触发

    // watchEffect 里所用到过的的所有数据（props.title，test），都会被自动监听
    // 使用变量接收watchEffect的返回值，执行即会取消监听

    // watch，传入前两个参数（函数）
    // 参数一 是需要监听的属性，
    // 参数二 是监听属性改变后触发的 动作，参数一是新值，参数二是旧值，参数三是onInValidate，这是个函数，触发时机是在每次改变值之前，
    // 参数三 是个对象，一般用于配置行为
    // watch默认在beforeUpdate之前触发
    // watch返回一个可执行函数，执行将会停止watch

    let stop = watch(
      ()=>{
        return counts.value
      },
      (newVal,oldVal,onInValidate)=>{
        console.log(newVal, oldVal)
        // onInValidate(()=>{
        //   // 可以在这个回调里阻止值的改变
        //   console.log('WatchEffect is changed!')
        // })
      }
    )
    setTimeout(() => {

      stop()
    }, 5000);
    // 这种写法仅适用于ref创建的变量
    // watch(counts,
    //   (newVal,oldVal)=>{
    //     console.log(newVal,oldVal)
    //   }
    // )

    // 报错，relative不能这样写，需要 ()=> num.a
    // watch(num.a,
    //   (newVal,oldVal)=>{
    //     console.log(newVal,oldVal)
    //   }
    // )
    const change = ()=>{

      counts.value ++
      name.value = '李四'
      num.a = 2
    }
    onBeforeUpdate(()=>{
      // console.log('onBeforeUpdate')
    })
    // watch(()=>{
    //   // 可以同时监听多个
    //   return [counts.value, name.value]
    //   },
    //   ([newCount,newName],[oldCount,oldName])=>{
    //     console.log('新newVal',newCount,newName)
    //     console.log('旧oldVal',oldCount,oldName)
    //   },
    //   {
    //     flush:'post'//这个参数可以控制watch在onBeforeUpdate之后触发
    //   }
    // )

    return {
      counts,
      name,
      num,
      // 方法start
      change
      // 方法end
    }
  },
 }
</script>

<style lang="css" scoped>
.changeDiv{
  width: 200px;
  height: 200px;
  background: pink;
}
</style>