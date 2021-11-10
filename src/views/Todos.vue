<template>
  <div>
    <div class="title">TodoList</div>
    <div class="buttons-wrapper">
      <button @click="onAddTodoClick">Add todo</button>
    </div>
    <div class="items-wrapper">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :onDeleteTodo="onDeleteTodo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from '@/components/TodoItem/TodoItem.vue';

export interface Todo {
  id: number,
  title: string,
  checked: boolean,
}

const DATA_TEST: Todo[] = [
  {
    id: 0,
    title: 'first',
    checked: false,
  },
  {
    id: 1,
    title: 'second',
    checked: false,
  },
];

export default Vue.extend({
  name: 'Todos',
  data() {
    return {
      todos: DATA_TEST,
    };
  },
  components: {
    TodoItem,
  },
  methods: {
    onAddTodoClick() {
      const maxItemId = this.todos.reduce((acc: number, item) => {
        if (item.id >= acc) {
          // eslint-disable-next-line
          acc = item.id + 1;
        }
        return acc;
      }, 0);
      console.log('maxItemId', maxItemId);
      this.todos.push({ id: maxItemId, title: '', checked: false });
    },
    onDeleteTodo(id: number) {
      console.log('onDeleteTodo', id, this.$data.todos.filter((item: Todo) => item.id !== id));
      return Number.isFinite(id)
        ? this.$data.todos.filter((item: Todo) => item.id !== id)
        : this.$data.todos;
    },
  },
});
</script>
<style scoped lang="scss">
  .title {
    border: 1px solid blue;
  }
  .items-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
