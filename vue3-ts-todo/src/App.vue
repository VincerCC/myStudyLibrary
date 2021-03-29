<template>
  <div class="wrap">
    vue 3 + ts
    <todoList :todoList="todoList"/>
    <todoInput />
  </div>
</template>

<script lang="ts">
// defineComponent 用户ts类型提示
  import { computed, defineComponent, onMounted } from 'vue';

  import { Store, useStore } from "vuex"

  import todoList from './components/todoList/todoList.vue';
  import todoInput from './components/todoInput/index.vue';
  import { useTodo, IUseTodo } from './hooks';

  export default defineComponent({
    name: 'App',
    components: {
      todoList,
      todoInput
    },
    setup(){
      const { setTodoList }: IUseTodo = useTodo()
      const store: Store<any> = useStore()
      onMounted(()=>{
        setTodoList()
      });
      return {
        todoList: computed(()=>store.state.list)
      }
    }
  });
</script>

<style>
</style>
