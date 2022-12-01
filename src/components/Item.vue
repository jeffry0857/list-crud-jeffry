<template>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
  <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
        <span>{{ todo.title }}</span>
      </label>
      <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" @click="handleDelete(todo.id)">Delete</button>
    </li>
</template>

<script>
export default {
  name: 'Item',
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    handleCheck(id) {
      this.checkTodo(id)
    },
    handleDelete(id) {
      if (confirm('Sure to delete ?'))
      {
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style>

</style>