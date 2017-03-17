<template>
	<div class="newsList">
  <ul>
    
   <li v-for="item in arr">
   <a href="javascript:;" >
        <h2>{{item.title}}</h2>
        <p>{{item.detail}}</p>
      </a>
   </li>

  </ul>
</div>

	
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        arr:[]
      }
    },
    mounted(){
        this.$store.dispatch('showLoading');
      this.$http.get('/src/data/follow.data').then((res)=>{
        
         setTimeout(()=>{
          this.$store.dispatch('hideLoading')
           this.arr=res.data;
        },800)
       // alert(typeof res.data);
        //console.log(res.data)
      },(error)=>{
        alert('follow.vue'+error.status)
      })
    }
  }

</script>
<style type="text/css" scoped>
	
	@import "../assets/css/index.css";
	.newsList{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>