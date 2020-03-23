<!-- 地図のコンポーネント（nuxt-leaflet） -->
<template>
  <div id="map">
   <no-ssr>
     <!-- 気仙沼大島の緯度・経度 -->
     <l-map :zoom="zoom" :center="center">
       <l-tile-layer :url="url"></l-tile-layer>
       <l-marker v-for="marker of marker" :lat-lng="marker.lat" class="dev">
         <l-popup :content="marker.contents"></l-popup>
       </l-marker>
     </l-map>
   </no-ssr>
  </div>
</template>

<script>
export default{
  data() {
    return{
      // leafletの設定
      center: [38.856355,141.615593],
      zoom: 13,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      // マーカーを置く場所一覧（観光地）
      marker: {
        center: {
          lat: [38.856355,141.615593],
          contents: "宮城県気仙沼市大島"
        },
        kugunaribeach: {
          lat: [38.873171,141.63164],
          contents: "十八鳴浜"
        },
        mtkame: {
          lat: [38.87373,141.617855],
          contents: "亀山"
        },
        tatsumai: {
          lat: [38.830445,141.624526],
          contents: "たつまいざき"
        },
        kodanobeach: {
          lat: [38.851971,141.622216],
          contents: "小田の浜"
        },
        bridge: {
          lat: [38.878459,141.606309],
          contents: "大島架橋"
        },
      }
    }
  }
}

</script>

<style scoped>
#map {
    margin:0 auto;
    height: 400px;
    padding: 0 12px;
}
</style>
