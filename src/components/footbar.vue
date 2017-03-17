<template>
	<div class="foot-btn" >
      <ul>
         <li class="home">
         <router-link active-class="active" to="/home" @click.native="showNav"></router-link></li>
        <li class="write">
        <router-link active-class="active" to="/"   
        @click.native="showNav"></router-link></li>
        <li class="my">
        <router-link  active-class="active" to="/user" @click.native="hideNav"></router-link></li> 

      </ul>
    </div>

	
</template>
<script>
import {mapActions} from 'vuex';
	export default{
		methods:mapActions(['showNav','hideNav'])
		/*methods:{
      change(){
        this.$store.commit('HIDE_NAV');
      }*/
	}
</script>
<style></style>