<template>
  <div id="description">
    <p class="des_p" style="margin: 100px 0;" v-for="description of descriptions">{{description}}</p>
  </div>
</template>


<script>
export default{
  data() {
    return{
      descriptions: {
        n1: "みなさんは気仙沼大島を知っていますか？",
        n2: "宮城県の北東に位置する大島",
        n3: "緑が多く海に囲われているため「緑の真珠」とも言われています。",
        n4: "そんな大島も震災の影響を受けました。",
        n5: "しかし、あれから数年たち復興がだんだん進んできて活気を取り戻しつつあります！",
        n6: "ぜひ、そんな気仙沼大島を楽しんでください！"
      }
    }
  }
}
</script>

<style land="scss" scoped>
  #description{
    text-align: center;
    font-size: 25px;
  }
</style>
