<template>
  <div class="home">
	  <in-header></in-header>
	  <news-list class="newslist"></news-list>
  </div>
</template>

<script>
import Header from '../components/Header'
import NewsList from '../components/NewsList'
export default {
  name: 'home',
  components: {
	  'in-header':Header,
	  'news-list':NewsList
  }
}
</script>
<style scoped>
.newslist{
	margin-top: -20px;
}
</style>
