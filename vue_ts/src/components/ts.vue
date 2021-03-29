<template>
  <div class="hello">
    <div v-for="item in features" :key="item.id" @click="show(item)">{{item}}</div>
    <div>我是新特性get计算属性：{{count}}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
interface features {
  name: string;
  id: number;
}
// 泛型
interface data1<T> {
  // 定义了一个接口，接口数据的类型是泛型，根据使用者的类型去限制类型
  data: T;
}
function getData<T>(): data1<T> {
  // 规定这个函数的返回格式为 接口 data1的格式
  const data: any = [
    { name: "1", id: 1 },
    { name: "2", id: 2 },
  ];
  return { data };
}
export default class HelloWorld extends Vue {
  // 属性相当于vue的data，可以直接使用
  private features: features[];
  constructor() {
    super();

    // 调用接口，类型传入接口features类型
    this.features = getData<features[]>().data;
  }
  // 直接声明方法，不需要写在methods中即可使用
  show(item: any): void {
    alert(item);
  }
  get count() {
    return new Date();
  }
  // 生命周期声明与vue的保持不变
  mounted() {
    console.log("组件生命周期");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
