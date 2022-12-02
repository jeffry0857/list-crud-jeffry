<template>
  <div class="bottom" v-show="total">
    <label v-if="(completed == total)" class="check-all">
      <input class="check-all-box" type="checkbox" v-model="allCompleted" />
      <span class="check-all-title">
        全部取消
      </span>
    </label>
    <label v-else class="check-all">
      <input class="check-all-box" type="checkbox" v-model="allCompleted" />
      <span class="check-all-title">
        全部勾選
      </span>
    </label>
    <div class="sub-total"> 已完成： {{ completed }} / 全部： {{ total }}</div> 
    <div class="progress-bar">
      <div class="percentage" :style="{ 'width': Math.round(completed/total * 100)+'%'}">
      </div>
    </div>
    <button 
      v-show="(completed > 0)" class="btn clear-all-btn" @click="clearAll">
      Clear all completed tasks
    </button>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],

  computed: {
    total() {
      return this.todos.length
    },
    completed() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    allCompleted: {
      get() {
        return this.completed === this.total && this.total > 0 // 防呆：大於0是為了確保已完成項目和total都 == 0
      },
      set(value) {
        this.checkAllTodo(value)
      }
    },
    
  },
  methods: {
    clearAll() {
      this.clearAllTodo()
    },
  }
}
</script>

<style lang="scss" scoped>
  .bottom {
    margin-top: 3vh;
  }

  .progress-bar .percentage {
    height: 1vh;
    border-radius: 99px;
    margin-bottom: 3vh;
  }

  .percentage {
    background-color: #b62626;
    }
  
  .sub-total {
    text-align: end;
  }

  .check-all {
    display: flex;
    justify-content: start;
    &-title {
      margin-left: 1vh;
    }
  }

  .clear-all-btn {
    width: 100%;
  }
</style>