<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-aside width="200px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="goTo"
        @open="handleOpen"
        @close="handleClose">
          <template v-for="(item,index) in navMenu">
            <el-submenu v-if="item.children" :index="index" :key="index">
              <span slot="title">{{item.title}}</span>
              <el-menu-item v-for="(sonItem,sonIndex) in item" :key="sonIndex" 
              :index="sonItem.url">{{sonItem.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.url" :key="index">{{item.title}}</el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data () {
    return {
      navMenu:[],
      navData:{
        //服装城
        clothing:[
          {title:'衣服',url:'/clothing/jacket',path:{ name: 'jacket', params: {} }},
          {title:'裤子',url:'/clothing/lower-body',path:{ name: 'lower-body', params: {} }}
        ],
        //食品城
        food:[
          {title:'牛奶',url:'/food/milk'},
          {title:'零食',url:'/food/snacks'}
        ],
        //鲜果城
        fruit:[
          {title:'水果',url:'/fruit/fruits'},
          {title:'蔬菜',url:'/fruit/vegetables'}
        ],
        //海鲜城
        seafood:[
          {title:'鱼类',url:'/seafood/fish'}
        ],
      }
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
     this.routerJump();
    },
    routerJump(){
      for(let key in this.navData){
        if(this.$route.name == key) this.navMenu=this.navData[key];
      }
    },
    goTo(key, keyPath){
      // console.log(key, keyPath);
      this.$router.push(key);
    },
    //goToPath({name:'task_my_task',navName:'rwgl',query:{}})
    goToPath(path) {
      window.top.location.hash = "/irrigation/" + path.navName;
      window.top.routerPath = path;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch:{
    $route:{
      handler(val,oldVal){
        console.log(val);
      },
      deep:true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
