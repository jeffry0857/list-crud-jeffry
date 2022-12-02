<template>
  <div class="add-row">
    <input class="input-todo" type="text" placeholder="Enter your itinerary" v-model="title">
    <button class="btn" @click="add()">
      <i class="fas fa-plus"></i>
    </button>
    
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

<style lang="scss" scoped>
  .add-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
  }

  .input-todo {
    width: 55%;
  }

  ::placeholder {
  padding-left: 2vh;
}
</style>