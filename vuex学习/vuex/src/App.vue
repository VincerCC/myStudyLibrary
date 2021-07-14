<template>
  <div id="app">
    <p>点击：{{$store.state.count}}次，现在的值是{{evenORodd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数的时候点我能加</button>
    <button @click="incrementAsync">异步</button>

    <h1>---------------------------------------------------------------------------------</h1>

    <p>使用别名（mapState，mapActions）点击：{{count}}次，现在的值是{{evenORodd}}</p>
    <button @click="mapIncrement">+</button>
    <button @click="mapDecrement">-</button>
    <button @click="mapIncrementIfOdd">奇数的时候点我能加</button>
    <button @click="mapIncrementAsync">异步</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {}
  },
  computed: {
    evenORodd(){
      return this.$store.getters.evenORodd//调用store中的计算方法
    },
    //设置别名，起到简化代码的作用，比如this.$store.state.count可以用this.count替代
    ...mapState({
      count: state => state.count
    })
  },
  // 当组件中的状态发生改变，通过dispatch函数提交到Action，Actions再通过Commit函数提交到Mutations, 此时，状态发生改变都会实时的去渲染组件。
  methods:{
    // // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']),
    //增加
    increment(){
      //通知vuex去加1
      this.$store.dispatch('increment')//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
    mapIncrement(){
      //通知vuex去加1
      this.increment()//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
    //减少
    decrement(){
      //通知vuex去减1
      this.$store.dispatch('decrement')//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
    mapDecrement(){
      //通知vuex去减1
      this.decrement()//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
    //如果是奇数才加1
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
    },
    mapIncrementIfOdd(){
      //通知vuex去加1
      this.incrementIfOdd()//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
    //异步增加，过一秒才增加
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    },
    mapIncrementAsync(){
      //通知vuex去加1
      this.incrementAsync()//分发消息,触发store中对应的actions调用，参数(消息名，传参数)
    },
  }

}
</script>

<style>

</style>
