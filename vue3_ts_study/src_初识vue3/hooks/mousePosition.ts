import { ref, onMounted, onBeforeUnmount } from "vue";
export default function() {
  const x = ref(0);
  const y = ref(0);
  const clickHandler = (ev: MouseEvent) => {
    x.value = ev.pageX;
    y.value = ev.pageY;
  };
  // 页面加载完毕后，点击操作
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
