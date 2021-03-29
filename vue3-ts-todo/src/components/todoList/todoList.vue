<template>
  <div class="">
    <todoItem
      v-for="item of todoList"
      :key="item.id"
      :item="item"
      @delTodo="delTodo"
      @setTodoStatus="setTodoStatus"
      @setDoing="setDoing"
    />
  </div>
</template>

<script lang="ts">
  // defineComponent 用户ts类型提示
  import { defineComponent, onMounted } from 'vue';
  import todoItem from '@/components/todoList/todoItem.vue'
import { useTodo, IUseTodo } from '../../hooks/index';
  export default defineComponent({
    name: 'todoList',
    props:{
      todoList: {
        type: Array
      }
    },
    components: {
      todoItem
    },
    setup(props, { emit }){
      const { delTodo, setTodoStatus, setDoing }: IUseTodo = useTodo()
      onMounted(()=>{

        console.log(props.todoList)
      })
      return {
        delTodo,
        setTodoStatus,
        setDoing
      }
    }
  })
</script>

<style lang="" scoped>
</style>