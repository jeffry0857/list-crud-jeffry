<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
      <i class="fas fa-list-ol"></i>
      <i class="fas fa-shopping-cart"></i>
      <i class="fas fa-map-marker-alt"></i>
      <i class="fas fa-comment-dots"></i>
      <i class="fas fa-info-circle"></i>
    </div>
    <div class="navigation-links">
      <transition-group name="fade">
        <div key="1" v-show="showLink">
          <router-link v-show="showLink" :to="{ name: 'home' }">
            To Do List
          </router-link>
        </div>
        <div key="2" v-show="showLink">
          <router-link v-show="showLink" :to="{ name: 'cart' }">
            My Cart
          </router-link>
        </div>
        <div key="3" v-show="showLink">
          <a href="https://jeffry0857.github.io/Ubike/UBike_Map.html">U Bike Map</a>
        </div>
        
      </transition-group>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
      showLink: false
    }
  },
  methods: {
    showNav() {
        if(this.showSidebar) {
          this.showLink = false;
          setTimeout(() => {
            this.showSidebar = false;
          }, 500);
        }
        else {
          this.showSidebar = true;
          setTimeout(() => {
            this.showLink = true;
          }, 500);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    padding: 10px;
    background-color: #fff;
    border: solid #fff;
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .4s ease-in-out;
    .control {
      @include alignCenter;
      justify-content: center;
      width: 50px;
      margin-bottom: 10px;
      i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .4s ease-in-out;
      }
    }
    &.show {
      width: 23vh;
      .control > i {
        transform: rotateZ(-180deg);
      }
      .navigation-icons {
        color: #fff;
      }
    }
    .navigation-icons {
      @include alignCenter;
      justify-content: center;
      flex-direction: column;
      width: 50px;
      float: left;
      i {
        font-size: 2rem;
        padding: 10px 0;
        cursor: pointer;
        transition: all .4s ease-in-out;
      }
    }
    .navigation-links {
      padding-top: 14px;
      div {
        font-size: 1.35rem;
        padding-left: 10px;
        margin-bottom: 18px;
        cursor: pointer;
      }
    }
  }
</style>