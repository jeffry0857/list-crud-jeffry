<template>
  <!-- <Navbar /> -->
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo" />
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
        <Bottom :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
  import Top from '@/components/Top.vue'
  import Bottom from '@/components/Bottom.vue';
  import List from '@/components/List.vue';
  import Navbar from '@/components/Navbar.vue';

  export default {
    name: "Home",
    components: { Top, Bottom, List, Navbar },
    data() {
      return {
        todos: [],
        // todos:[
        //   { id: '001', title:'Smoking', done: true },
        //   { id: '002', title:'walking', done: false },
        //   { id: '003', title:'Driving', done: true },
        // ]
      }
    },
    methods: {
      addTodo(todoObj) {
        this.todos.unshift(todoObj)
      },
      checkTodo(id) {
        this.todos.forEach((todo) => {
          if (todo.id == id) todo.done = !todo.done
        })
      },
      deleteTodo(id) {
        this.todos = this.todos.filter (todo => todo.id !== id)
      },
      checkAllTodo(done) {
        this.todos.forEach((todo) => {
          todo.done = done
        })
      },
      clearAllTodo() {
        this.todos = this.todos.filter((todo) => {
          return !todo.done
        })
      }
    },
    beforeCreate() {
    fetch('https://mocki.io/v1/5ef6e525-b21c-4d1d-b470-099ca9d8087c')
      .then((response) => {
        return response.json()
      })
      .then(res => {this.todos = res})
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

body {
  @include theme-warm
}

  .todo-wrap {
  max-width: 480px;
  width: 100%;
  max-height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
  color: #222;
} 
</style>
