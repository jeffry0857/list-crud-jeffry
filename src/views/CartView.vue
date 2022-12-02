<template>
  <div id="cart" v-for="lecture in lectures" :key="lecture.name">
    <p>{{lecture.name}}</p>
    <p>{{lecture.city}}</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'CartView',
  components: { Navbar, Spinner },
  data() {
    return {
      lectures: [],
    }
  },
  beforeCreate() {
    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then(res => {this.lectures = res})
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
body {
  @include theme-light-weight
}
</style>