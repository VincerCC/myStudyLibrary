<template>
  <div class="">
    <input class="myInput" type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'myInput',
  props:{
    placeholder:{
      type: String,
      defalut: '请输入'
    }
  }
 }
</script>

<style lang="css" scoped>
.myInput{
  border: 1px solid purple;
}
</style>