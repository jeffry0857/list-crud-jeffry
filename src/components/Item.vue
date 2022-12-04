<template>
  <li class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span class="todo-item-title">{{ todo.title }}</span>
    </div>
    <button class="btn" @click="handleDelete(todo.id)">
      <i class="fas fa-trash"></i>
    </button>
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

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
  .todo-item {
    padding: 2vh 0 2vh 0;
    @include alignCenter;
    justify-content: space-between;
    &-left {
      @include alignCenter
    }
    input:checked {
      background-size: 10px;
      border: 1px solid var(--checkbox-color);
      background-color: var(--checkbox-color)
    }
    span {
      margin-left: 1vh;
    }
  }
</style>