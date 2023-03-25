<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <h1>Form  in vue js</h1> 
   <!-- <LoginForm /> -->
   <FormPage />
   <div v-if="display">
     <DestroyData/>
     <EmployeeList/>
     <ActiveBoot/>
   </div>
   
   <button v-on:click="toggle">Toggle</button>
  </div>
 </template>


 <script>
 import ActiveBoot from './components/ActiveBoot.vue'
 import EmployeeList from './components/EmployeeList.vue'
 import DestroyData from './components/Destroy.vue'
 import FormPage from './components/Form.vue'
//  import LoginForm from './components/LoginForm.vue'
 export default{
  name:"App",
  components:{
    // LoginForm,
    FormPage,
    DestroyData,
    EmployeeList,
    ActiveBoot
  },
  data()
  {
    return {display:true}
  },
  methods:{
    toggle()
    {
      this.display=!this.display;
    }
  }
 };
 </script>


<style lang="scss">
//  @import "~@/assets/scss/vendors/bootstrap-vue/_custom"; 
//     @import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
