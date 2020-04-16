<template>
  <div class="title_img">
    <img src="../static/oosima.webp" alt="">
    <div class="title_char">
      <!-- <transition
        name="custom"
        enter-active-class="animated zoomInUp"
        leave-active-class="animated zoomOut"
      >
        <p v-if="show">{{this.title}}</p>
      </transition> -->
      <span
      v-for="(t, index) in title"
      :key="index"
      class="item"
      :style="{animationDelay: index*100+'ms'}"
      v-text="t"
      />
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      title: "宮城県気仙沼市大島",
      show: false
    }
  },
  mounted() {
    this.show = !this.show;
  },
}
</script>

<style lang="scss">
.title_img{
  position: relative;
  img{
    width: 100%;
    height: 300px;
  }
}
.title_char{
  position: absolute;
  // 画像の上のテキスト中央寄せ（上下左右）
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  // 文字の色・サイズ
  span{
    color: white;
    font-size: 66px;
  }
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

</style>
