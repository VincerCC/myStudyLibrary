<template>
  <div class="">
    <input type="checkbox" :checked="item.status === finished" @click="setTodoStatus(item.id)"/>
    <span
      :class="item.status === finished ? 'line_through': ''"
    >
      {{item.content}}
    </span>
    <button @click="delTodo(item.id)">删除</button>
    <button v-if="item.status !== finished" @click="setDoing(item.id)" :class="item.status === doing ? 'doing': 'todo'">{{ item.status === doing ? '正在做...' : '马上做'}}</button>
  </div>
</template>

<script lang="ts">
// defineComponent 用户ts类型提示
import { TODO_STATUS } from '@/typings';
import { defineComponent } from 'vue';
interface IStatusState {
    doing: TODO_STATUS,
    finished: TODO_STATUS,
    todo: TODO_STATUS,
}
export default defineComponent({
  name: 'todoItem',
  props:{
    item: {
      type: Object
    }
  },
  setup(props, { emit }){
    const statusState: IStatusState = {
      doing: TODO_STATUS.DOING,
      finished: TODO_STATUS.FINISH,
      todo: TODO_STATUS.TODO,
    }
    const delTodo = (id: number): void=>{
      emit('delTodo', id)
    }
    const setTodoStatus = (id: number): void=>{
      emit('setTodoStatus', id)
    }
    const setDoing = (id: number): void=>{
      emit('setDoing', id)}
    return {
      ...statusState,
      delTodo,
      setTodoStatus,
      setDoing
    }
  }
})
</script>

<style lang="css" scoped>
.line_through{
  text-decoration: line-through;
}
.doing{
  background: #cdcdcd;
}
.todo{
  background: orange;
  color: #ffffff;
}
</style>