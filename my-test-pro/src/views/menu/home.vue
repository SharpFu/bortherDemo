<template>
  <div style="height:100%;">
    <!-- <div>这是首页</div>
    <div>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
    </div> -->
    <iframe height="100%" width="100%" :src="mapUrl" scrolling="auto" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  data () {
    return {
      mapUrl:"/static/testMap.html"
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
     
    }
  }
}
</script>

<style lang="less" scoped>

</style>
