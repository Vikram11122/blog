<template>

             <!-- FORM VALIDATION -->
             
    <div>
        <p v-if="error.length">
            <b>Please correct the following errors</b>
         <ul>
            <li v-for="e in error" v-bind:key="e.id">
            {{e}}
            </li>
         </ul>
        </p>

         <form @submit="Login">
             <input type="text" placeholder="Enter name" v-model="name"/> <br><br>
             <input type="password" placeholder="Enter password" v-model="password"/><br><br>
             <button type= "submit"> Login </button>     
        
        </form>
    </div>
 </template>
 <script>
   export default {
     name:"FormPage",
     data()
     {
        return{
            error:[],
            name:null,
            password:null
        }
     },

     methods:{
        Login(e)
        {
            this.error=[];
            if(this.name && this.password)
            {
                console.warn("no error")
            }
            if(!this.name){
                this.error.push("User name  is required");
            }
            if(!this.password)
            {
                this.error.push("Password is required");
            }
            console.warn("Hello");
            e.preventDefault();
        }
     }
   }
 
 
 </script>