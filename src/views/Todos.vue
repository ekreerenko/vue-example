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
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoItem from '@/components/TodoItem/TodoItem.vue';
// import TodoItem from '../components/TodoItem/TodoItem.vue';
const DATA_TEST = [
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
        if (item.id > acc) {
          // eslint-disable-next-line
          acc = item.id;
        }
        return acc;
      }, 0);
      this.todos.push({ id: maxItemId, title: '', checked: false });
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
