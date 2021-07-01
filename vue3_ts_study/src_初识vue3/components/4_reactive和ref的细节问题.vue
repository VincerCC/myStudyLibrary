<template>
  <h2>reactive和ref的细节问题</h2>
  <h4>m1：{{ m1 }}</h4>
  <h4>m2：{{ m2 }}</h4>
  <h4>m3：{{ m3 }}</h4>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    /**
     * ref 用来处理基本类型数据，reactive用来处理对象（递归深度响应式）
     * 如果用ref对象/数组，内部将自动将对象/数组转换为reactive的代理对象
     *
     * ref内部：通过value属性添加getter/setter来实现对数据的劫持
     * reactive内部：通过使用proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
     *
     * ref的数据操作：在js中要.value，模板中不需要（解析模板的时候会自动添加.value）
     */
    const m1 = ref("m1");
    const m2 = reactive({
      name: "小哆啦",
      brother: {
        name: "小糕糕",
      },
    });
    // ref可以传入对象吗？
    const m3 = ref({
      name: "小哆啦",
      brother: {
        name: "小糕糕",
      },
    });
    const update = () => {
      m1.value += "=";
      m2.brother.name += "==";
      m3.value.brother.name += "===";
    };

    console.log("m1", m1);
    console.log("m2", m2);
    console.log("m3", m3);

    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
<style lang="" scoped></style>
