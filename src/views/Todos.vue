<template>
  <div>
    <div class="title">TodoList</div>
    <div class="buttons-wrapper">
      <button @click="onAddTodoClick">Add todo</button>
      <select v-model="todoType">
        <option
          v-for="option in options"
          :key="option.name"
          :value="option.value"
        >
          {{option.name}}
        </option>
      </select>
    </div>
    <div class="items-wrapper">
      <TodoItem
        v-for="todo in renderTodoList"
        :key="todo.id"
        :todo="todo"
        :onDeleteTodo="onDeleteTodo"
        :onChangeCheck="onChangeCheck"
        :onChangeTitle="onChangeTitle"
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

// eslint-disable-next-line no-shadow
export enum TodoSelectionType {
  All = 'all',
  Checked = 'checked',
  Unchecked = 'unchecked',
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

const OPTIONS = [
  {
    name: TodoSelectionType.All,
    value: TodoSelectionType.All,
  },
  {
    name: TodoSelectionType.Checked,
    value: TodoSelectionType.Checked,
  },
  {
    name: TodoSelectionType.Unchecked,
    value: TodoSelectionType.Unchecked,
  },
];

export default Vue.extend({
  name: 'Todos',
  data() {
    return {
      todos: DATA_TEST,
      options: OPTIONS,
      todoType: TodoSelectionType.All,
    };
  },
  components: {
    TodoItem,
  },
  computed: {
    renderTodoList(): Todo[] {
      const filteredTodos = {
        [TodoSelectionType.All]: this.todos,
        [TodoSelectionType.Checked]: this.todos.filter((item: Todo) => item.checked),
        [TodoSelectionType.Unchecked]: this.todos.filter((item: Todo) => !item.checked),
      };
      return filteredTodos[this.todoType];
    },
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
      this.todos = Number.isFinite(id)
        ? this.todos.filter((item: Todo) => item.id !== id)
        : this.todos;
    },
    onChangeCheck(id: number, value: boolean) {
      this.todos = this.todos.map((item: Todo) => (item.id === id ? ({
        ...item,
        checked: value,
      }) : item));
    },
    onChangeTitle(id: number, value: string) {
      this.todos = this.todos.map((item: Todo) => (item.id === id ? ({
        ...item,
        title: value,
      }) : item));
    },
  },
});
</script>
<style scoped lang="scss">
  .title {
    border: 1px solid blue;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .items-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
