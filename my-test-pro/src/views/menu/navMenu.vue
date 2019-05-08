<template>
  <div>
    <div class="nav">
      <ul class="nav-header">
        <li v-for="(item,index) in navList" :key="index" 
        :class="[navIndex == index?'active':'']"
         @click="gotoPath(item.url,index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navMenu',
  data () {
    return {
      navIndex:0,
      navList:[
        {name:'首页',url:'home'},
        {name:'服装城',url:'clothing'},
        {name:'食品城',url:'food'},
        {name:'鲜果城',url:'fruit'},
        {name:'海鲜城',url:'seafood'},
      ]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
     this.navHanlder();
    },
    navHanlder(){
      this.navList.forEach((item,index) => {
        if(this.$route.name == item.url) this.navIndex = index;
      })
    },
    gotoPath(url,index){
      this.navIndex = index;
      this.$router.push(url);
      // window.top.location.hash = '#/' + url;
    }
  },
  watch:{
    $route:{
      handler(val,oldVal){
        this.navHanlder();
        console.log(val);
        //console.log(this.$route.name);
        // console.log(window.top.location.hash,'hash')
      },
      deep:true
    }
  }
}
</script>

<style lang="less" scoped>
.nav .nav-header{
  height:60px;
  line-height:60px;
  font-size:14px;
  width:300px;
  margin: 0 auto;
  list-style:none;
  &>li{
    float:left;
    width:60px;
    text-align:center;
    cursor: pointer;
    color:blue;
    border-radius:30%;
  }
  .active{
    background-color:skyblue;
  }
}
.content{
  height:calc(100% - 60px);
}
</style>
