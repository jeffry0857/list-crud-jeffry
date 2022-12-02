<template>
  <ul class="todo-main text-sm mt-6 ">
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