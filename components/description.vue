<template>
  <div id="description">
    <p class="des_p" style="margin: 20px 0;" v-for="description of descriptions">{{description}}</p>
    <h3 class="">紹介動画</h3>
    <iframe v-for="url of youtube_url" width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      },
      youtube_url: {
        n1: "https://www.youtube.com/embed/vHrBqSU-DCY",
        n2: "https://www.youtube.com/embed/KxSMMg0GmUo",
        n3: "https://www.youtube.com/embed/Mxz9q5Hh43E",
        n4: "https://www.youtube.com/embed/wGegL_wWJM0"
      }
    }
  }
}

</script>

<style land="scss" scoped>
  #description{
    text-align: center;
  }
</style>
