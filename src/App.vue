<template>
  <div id="app">
   <navbar v-if="getNav"></navbar>
   <loading v-if="getLoading"></loading>
    <!--banner-->
   <transition enter-active-class="animated zoomOut" leave-active-class="animated zoomOutDown">
     <keep-alive><router-view></router-view></keep-alive>
     <!-- keep-alive就是让页面相同的部分只加载一次，再次出现相同页面时只加载一次 -->
   </transition>
   
    <!--尾部-->
    <footbar v-if="getFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import footbar from './components/footbar.vue';
import {mapGetters} from 'vuex'
export default {

  components:{
    navbar,
    footbar
  },
  computed:mapGetters(['getNav','getFoot','getLoading']),
  watch:{
    $route(to){
      this.change(to.path)
    }
  },
  methods:{
    change(path){
      path=path.substring(1);
      if(path=='user'||path=='reg'||
        path=='login'||path.indexOf('article')!=-1){
        this.$store.dispatch('hideNav')
      }else{
        this.$store.dispatch('showNav');  
      }
      if(path=='reg'||
        path=='login'){
        this.$store.dispatch('hideFoot')
      }else{
        this.$store.dispatch('showFoot');  
      }
      
    }
  },
  mounted(){
    this.change(this.$route.path)
    
  }
  
  

}
</script>

<style>
	@import "./assets/css/index.css"
</style>
