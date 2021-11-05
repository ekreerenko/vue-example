<template>
  <div class="todo-item-wrapper">TodoItem</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
});
</script>

<style scoped lang="scss">
  .todo-item-wrapper {
    border: 1px solid red;
  }
</style>
