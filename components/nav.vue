<!-- ナビバーコンポーネント -->
<template>
  <div id="nav">
    <nav class="layer">
    	<ul>
        <!-- ナビゲート先（リンク） -->
    		<li><nuxt-link to="/">TOP</nuxt-link></li>
    		<li><nuxt-link to="/about">ABOUT</nuxt-link></li>
        <li><nuxt-link to="/tourism">Tourism</nuxt-link></li>
        <li><nuxt-link to="/news-all">News</nuxt-link></li>
    	</ul>
    </nav>
    <!-- メニュータイトル -->
    <section class="home page layer">
    	<h1>メニュー</h1>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: ""
    }
  }
}
</script>

<style scoped lang="scss">

// （ナビバー参考）https://codepen.io/bennettfeely/pen/xwrMMX
body {
	font: 100%/1.4 Unica One;
	text-transform: uppercase;
	background: #222;
	height: 100vh;
	overflow: hidden;
}

h1 {
	font-size: 40px;
	text-align: center;
	transition: opacity .4s;
  color: #FFFFFF;
}

.layer {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	color: black;
	top: 0;
	left: 0;
	right: 0;
  height: 150px;
	transition: transform .4s;
	transform:
			perspective(800px)
			scale(1)
			translateX(0)
			rotateY(0);
	transform-style: preserve-3d;
  background-color: white;
}

nav {
	align-items: center;
	vertical-align: center;
	ul {
		font-size: larger;
		line-height: 2;
		padding-left: 66.66%;
		text-transform: uppercase;
    font-family: 'Pacifico', ;
		li {
			cursor: pointer;
      a{
        text-decoration: none;
        color: inherit;
      }
		}
	}
}

.home {
	background: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  max-width: 100vw;
	#nav:hover & {
		transform:
			perspective(800px)
			scale(.5)
			translateX(-16.66%)
			rotateY(25deg);
	}

}
</style>
