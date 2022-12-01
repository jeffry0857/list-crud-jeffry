<template>
  <div class="flex justify-between">
    <input type="text" placeholder="Enter your itinerary" v-model="title">
    <button @click="add()">Add</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Top',
  props: ['addTodo'],
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      if (!this.title.trim()) return alert('cannot be empty')
      const todoObj = {id: nanoid(), title: this.title, done: false}
      this.addTodo(todoObj)
      this.title = ''
    }
  }
}
</script>

<style>

</style>