<template>
  <div class="">
    <h1> {{superSentence}} </h1>
    <input type="text" v-model="text"/>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'computed',
  setup() {
    let sentence = ref('欢迎您')
    let text = ref('')

    let superSentence = computed(() => {
      console.log('66')
      return sentence.value + text.value
    })
    return {
      superSentence,
      text
    }
  },
 }
</script>

<style lang="" scoped>
</style>