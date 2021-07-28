<template>
  <div style="width: 100%;height: 100%;">
    <!-- 我的收藏 我的发表 我的足迹 -->
    <!-- <p v-if="page_name=='collection'||page_name=='published'||page_name=='history'" style="text-align: center;width: 100%;">
      没有更多数据了
    </p> -->
    <div v-if="page_name=='collection'" style="width: 100%;height: 100%;">
      <collection></collection>
    </div>
    <div v-if="page_name=='published'" style="width: 100%;height: 100%;">
      <published></published>
    </div>
    <div v-if="page_name=='message'" style="width: 100%;height: 100%;">
      <messages></messages>
    </div>
    <div v-if="page_name=='history'" style="width: 100%;height: 100%;">
      <history></history>
    </div>
    <div v-if="page_name=='help'" style="width: 100%;height: 100%;">
      <help></help>
    </div>
  </div>
</template>

<script>
  import collection from '../components/collection'
  import published from '../components/published'
  import messages from '../components/messages'
  import history from '../components/history'
  import help from '../components/help'
export default {
  name: 'Details',
  data () {
    return {
      page_name:this.$route.params.page_name,
    }
  },
  components: {
    'collection':collection,
    'published':published,
    'messages':messages,
    'history':history,
    'help':help,
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
