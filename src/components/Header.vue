<template>
  <div id="header">
	<v-img
		class="img"
	    :src="require('../assets/header_bg.jpg')"
	    :lazy-src="require('../assets/header_bg.jpg')"
		width="100%">
	</v-img>
	<v-btn  rounded elevation="0" color="#f8ac15" dark class="btn" to="/call">呼叫大湘</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  components: {
  	
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#header{
		position: relative;
	}
	.btn{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 15%;
		margin: auto;
		width:40%;
		font-size: 18px;
	}
</style>
