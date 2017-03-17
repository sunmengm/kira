<template>
	<div class="home">
		<banner></banner>
    <!--home列表-->
    <div class="newsList">
      <ul>
        
        <router-link :to="'/article/'+item.id" tag="li" v-for="item in arr">
          <a href="javascript:;">
            <h2>{{item.id}}.{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </router-link>
        
        
      </ul>
    </div>



	</div>




</template>
<script>
	import banner from './banner.vue'
	export default{
    data(){
      return {
        arr:[]
      }
    },
		components:{
   		banner
  			},
    mounted(){
      this.$store.dispatch('showLoading')
    this.$http.get('./src/data/index.data').then((res)=>{
      //console.log(res.data)
      setTimeout(()=>{
        this.$store.dispatch('hideLoading');
        this.arr=res.data
      },800)
      
    },(error)=>{
      alert('home.vue'+error.status)
    })
  },
	}


</script>
<style></style>