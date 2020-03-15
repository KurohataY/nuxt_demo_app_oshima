<template>
  <div class="title_img">
    <img src="../static/oosima.webp" alt="">
    <div class="title_char">
      <p>{{this.title}}</p>
    </div>
  </div>
</template>
<script>
export default{
  data() {
    return {
      title: "宮城県気仙沼市大島"
    }
  },
  created(){

  }

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
  p{
    color: white;
    font-size: 66px;
  }
}

</style>
