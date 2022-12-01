<template>
  <ul class="todo-main">
    <Item 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      :checkTodo="checkTodo" 
      :deleteTodo="deleteTodo" />
  </ul>
</template>

<script>
import Item from './Item.vue';
export default {
  components: { Item },
  props: ['todos', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
</style>