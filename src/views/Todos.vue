<template>
  <div class="title">TodoList</div>
  <div v-for="todo in todos">
    <TodoItem :key="todo.id" :todo="todo" />
  </div>
<!--  <TodoItem />-->
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

console.log('Todos -->');
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
  methods: {},
});
</script>
<style scoped lang="scss">
  .title {
    background-color: red;
  }
</style>
