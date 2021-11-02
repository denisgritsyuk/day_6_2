<template>
    <div>  
        
      
     <link rel="stylesheet" id="style" v-bind:href="chosenstyle == 'light' ? './style1.css' : './style2.css'">
       <input type="radio" name="style1" value="light" v-on:click="chosestyle('light')">style1<br>
        <input type="radio" name="style2" value="dark" v-on:click="chosestyle('dark')">style2
            
   </div>
   
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

   export default {
    data: function() {
           return {
            
        
        }},
    
    
    computed:{
        chosenstyle(){
                return this.$store.getters.getstyle
            },
    },
    
    methods:{
        chosestyle: function(style){
                this.$store.commit('setstyle', style);
            },
        
    }
    
    
   }
    
</script>