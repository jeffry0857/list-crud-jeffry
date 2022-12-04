<template>
  <transition-group
    appear
    tag="ul"
    @before-enter="beforeEnter"
    @enter="enter"
    class="column"
  >
    <li v-for="(lecture, index) in lectures" 
      :key="lecture.name" 
      :data-index="index"
      class="row"
    >
      <h3>{{lecture.name}}</h3>
      <div>{{lecture.city}}</div>
    </li>
  </transition-group>
</template>

<script>
import LoadingVue from '@/components/Loading.vue'
import gsap from 'gsap'
export default {
  name: 'CartView',
  components: { LoadingVue, gsap },
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
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

  .column {
    @include alignCenter;
  }

  .row {
      border: 1px solid white;
      padding: 5vh;
    }
</style>