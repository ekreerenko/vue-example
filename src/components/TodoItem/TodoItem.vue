<template>
  <div class="todo-item-wrapper">
    <input type="checkbox" @click="onCheckboxClick" />
    <div @dblclick="onTextDoubleClick">
      1
    </div>
    <button @click="OnDeleteClick">Delte</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
  methods: {
    onCheckboxClick(event: any) {
      console.log('onCheckboxClick', event);
    },
    onTextDoubleClick(event: any) {
      console.log('onTextDoubleClick', event);
    },
    OnDeleteClick() {
      console.log('OnDeleteClick');
    },
  },
});
</script>

<style scoped lang="scss">
  .todo-item-wrapper {
    display: flex;
    min-height: 30px;
    min-width:  400px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
  }
</style>
