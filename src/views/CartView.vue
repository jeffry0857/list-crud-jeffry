<template>
  <transition-group
    appear
    tag="ul"
    @before-enter="beforeEnter"
    @enter="enter"
    class="whole-content"
  >
    <li v-for="(item, index) in myCarts" 
      :key="item.id" 
      :data-index="index"
      :src="item.img"
      class="row"
    >
      <h3>{{item.name}}</h3>
      <img :src="item.img">
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
      myCarts: [],
    }
  },
  beforeCreate() {
    fetch('https://mocki.io/v1/daf45bf6-f866-410b-b4e1-6b3b70ea4110')
      .then((response) => {
        return response.json()
      })
      .then(res => {this.myCarts = res})
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

  .whole-content {
    display: flex;
    justify-content:right
  }

  .row {
      padding: 5px;
      width: 100%;
      height: 100%;
      position: relative;
      padding-top: 25%;
      @include alignCenter;

      img {
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 480px) {
    .whole-content {
      display: inline-block;
      margin: auto 0px auto 0px ;
    }
  }
</style>