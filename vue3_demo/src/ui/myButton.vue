<template>
  <div class="">
    <button class="myButton" style="background: orange;width:100px;height:100px;">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'myButton',
 }
</script>

<style lang="css" scoped>
</style>