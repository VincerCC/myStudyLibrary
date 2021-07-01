<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        @clearAllCompletedTodos="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ITodo } from "./types/todo";
import { saveTodos, getTodos } from "./utils/util";
import Header from "../src/components/header.vue";
import List from "./components/list.vue";
import Footer from "./components/footer.vue";
import {
  onMounted,
  defineComponent,
  provide,
  reactive,
  toRefs,
  watch,
} from "vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    onMounted(() => {
      state.todos = getTodos();
    });
    const state = reactive<{ todos: ITodo[] }>({
      todos: [],
    });
    // 添加数据
    const addTodo = (todo: ITodo) => {
      state.todos.unshift(todo);
    };
    // 删除数据
    const deleteTodo = (id: number) => {
      console.log(id);
      state.todos = state.todos.filter((item) => item.id !== id);
    };
    provide("deleteTodo", deleteTodo);
    // 更新数据
    const updateTodo = (id: number, status: boolean) => {
      let updateItem = state.todos.find((item) => item.id === id);
      if (updateItem) {
        updateItem.isCompleted = status;
      }
    };

    // 全选或反选
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted;
      });
    };

    // 清除所有已完成
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((item) => !item.isCompleted);
    };

    // 监视todos改变，及时更新缓存数据
    watch(
      () => state.todos,
      (newVal) => saveTodos(newVal),
      {
        deep: true,
      }
    );
    return {
      ...toRefs(state),
      addTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    };
  },
});
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
