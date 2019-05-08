<template>
  <div>
    衣服 +{{num}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'jacket',
  // computed: {
  //   num () {
  //     return this.$store.state.count
  //   }
  // },
  computed: {
    ...mapState({
      num:'count'
    })
  },
  data () {
    return {
      
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
