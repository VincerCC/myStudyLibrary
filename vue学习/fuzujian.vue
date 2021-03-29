<template>
  <todo-list :todos="todos">
    <template slot-scope="slotProps">
      <span v-if="slotProps.todo.isComplete">✓</span>
      <span>{{slotProps.todo.text}}</span>
    </template>
  </todo-list>
</template>

<script>
import todoList from 'zizujian.vue'
export default {
  data () {
    return {
      todos: [
        {
          id: 0,
          text: 'ziwei0',
          isComplete: false
        },
        {
          text: 'ziwei1',
          id: 1,
          isComplete: true
        },
        {
          text: 'ziwei2',
          id: 2,
          isComplete: false
        },
        {
          text: 'ziwei3',
          id: 3,
          isComplete: false
        }
      ]
    }
  },

  components: {
    todoList
  },

}
</script>