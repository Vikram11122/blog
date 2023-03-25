<template>
    <div>
      <h1>Home Component</h1>
      <h1>{{45 + 35 }}</h1>
      <h1 class="Homestyle">class and style Bindings</h1>
      <h1 v-bind:style="{color:colorKey}">Style Bindings</h1>
      <h1 v-bind:class="{display:show}">class Bindings with object</h1>
      <h1 v-bind:class="[aclass]">Class Bindings with Array</h1>
      <h1 v-bind:class="[show?'yesSHow':noSHow]">Class Binding with Arrayyyyy</h1>
      <h1 style="white-space:pre-line">{{ message }}</h1>
       <textarea type="text" v-model="message"></textarea>
      <button v-on:click="updateText">Click me</button>
      <Users/>
    </div>
</template>
<script>
import Users from './Users'
// import Products from './Products'
  export default{
    name:'HomeComponent',

    data(){
      return{
        show:true,
        aclass:'arrayClass',
        colorKey: 'red',
        message:"Hii2"
      }
    },
     
    components:{
        Users,
        // Products

    }
  }
  
 

</script>
<style scoped>
 div{
    background-color: #dde5ec;
    height:50px;
 }
 .Homestyle{
  color: orange
 }
 .display{
  background-color: aquamarine;
 }
 .aclass{
  background-color: aqua;
 }

</style>

