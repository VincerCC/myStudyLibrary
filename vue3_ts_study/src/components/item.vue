<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo(todo.id)">
      删除
    </button>
  </li>
</template>

<script lang="ts">
import { ITodo } from "../types/todo";
import {
  defineComponent,
  reactive,
  toRefs,
  inject,
  watch,
  ref,
  computed,
} from "vue";

export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => ITodo, // 函数返回的是ITodo类型
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      bgColor: "#ffffff",
      isShow: false,
    });
    // 鼠标行样式
    const mouseHandler = (status: boolean) => {
      if (status) {
        // 鼠标进入
        state.bgColor = "pink";
        state.isShow = true;
      } else {
        // 鼠标离开
        state.bgColor = "#ffffff";
        state.isShow = false;
      }
    };
    // 计算并监视选中操作
    const isCompleted = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val: boolean) {
        props.updateTodo(props.todo.id, val);
      },
    });

    // 通过依赖App.vue注入的方法，实现删除
    const delTodo = inject("deleteTodo");

    return {
      ...toRefs(state),
      isCompleted,
      mouseHandler,
      delTodo,
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
