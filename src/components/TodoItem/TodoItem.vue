<template>
  <div class="todo-item-wrapper">
    <div>{{todo.id}}</div>
    <input type="checkbox" @click="onCheckboxClick" value="todo.checked" />
    <div @dblclick="onTextDoubleClick">
      {{todo.title}}
    </div>
    <button @click="OnDeleteClick">Delte</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default() {
        return {
          id: null,
          title: '',
          checked: null,
        };
      },
    },
  },
  data() {
    return {
      inputTitle: this.todo.title,
    };
  },
  mounted() {
    console.log('mounted', this.todo);
  },
  computed: {
    // shouldRender() {
    //   return this.todo.id && this.todo.title && typeof this.todo.checked === 'boolean'
    // }
  },
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
