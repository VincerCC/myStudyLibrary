<template>
  <div class="">
    <input type="text" v-model="todoValue" @keyup="setTodoValue">
  </div>
</template>

<script lang="ts">
// defineComponent 用户ts类型提示
import { defineComponent, ref } from 'vue';
import { useTodo } from '../../hooks/index'
export default defineComponent({
  name: 'todoInput',
  setup(){
    const { setTodo } = useTodo()
    let todoValue = ref<string>('')
    const setTodoValue = (e: KeyboardEvent): void => {
      if(e.keyCode === 13 &&  todoValue.value.trim()){
        // 回车
        // 设置数据
        setTodo(todoValue.value)
        // 清空输入框
        todoValue.value = ''
      }
    }
    return {
      // 属性
      todoValue,
      // 事件
      setTodoValue
    }
  }
})
</script>

<style lang="" scoped>
</style>