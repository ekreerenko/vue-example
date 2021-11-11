<template>
  <div class="todo-item-wrapper">
    <div class="number">{{todo.id}}</div>
    <div class="checkbox-container">
      <input
        type="checkbox"
        @change="onCheckboxClick($event, todo.id)"
        :checked="todo.checked"
      />
    </div>
    <div
      class="title-style"
      v-if="!isEditMode"
      @dblclick="onTextDoubleClick">
      {{todo.title}}
    </div>
    <input
      v-if="isEditMode"
      class="title-style"
      @blur="onTitleBlur(todo.id)"
      ref="titleText"
      :value="inputTitle"
      @change="onTitleInputChange"
    >
    <button @click="onDeleteClick(todo.id)">Delete</button>
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
    onDeleteTodo: {
      type: Function,
      required: true,
    },
    onChangeCheck: {
      type: Function,
      required: true,
    },
    onChangeTitle: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      inputTitle: this.todo.title,
      isEditMode: false,
    };
  },
  mounted() {
    console.log('mounted', this.$props);
  },
  methods: {
    onCheckboxClick(event: any, id: number) {
      this.onChangeCheck(id, event.target.checked);
    },
    onTextDoubleClick(event: any) {
      console.log('onTextDoubleClick', this.isEditMode, event);
      this.onChangeEditMode();
      this.focusInput();
    },
    focusInput() {
      const input = this.$refs.titleText;
      if (input) {
        // eslint-disable-next-line
        input.focus();
      }
    },
    onDeleteClick(id: number) {
      console.log('OnDeleteClick');
      this.onDeleteTodo(id);
    },
    onTitleInputChange(event: any) {
      this.inputTitle = event.target.value;
      console.log('onTitleChange -->', this.inputTitle, event);
    },
    onTitleBlur(id: number) {
      this.onChangeTitle(id, this.inputTitle);
      this.onChangeEditMode();
    },
    onChangeEditMode() {
      this.isEditMode = !this.isEditMode;
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
  .checkbox-container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .number {
    padding-left: 15px;
  }
  .title-style {
    margin-left: 15px;
    margin-right: auto;
    min-width: 100px;
    min-height: 22px;
    border: 1px solid blue;
  }
</style>
