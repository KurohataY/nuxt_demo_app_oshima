<template >
  <div>
    <h3 class="">紹介動画</h3>
    <iframe v-for="url of youtube_url" width="560" height="315" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

</template>

<script>
export default{
  data() {
    return{
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

<style lang="scss" scoped>
</style>
