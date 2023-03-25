 <template>
    <div>
        <input type="text" v-model="LoginForm.username" name="username" placeholder="Enter user name" />   <br><br>
        <input type="password" v-model="LoginForm.password" name="Password" placeholder="Enter user name" /> <br><br>
        <button v-on:click="LoginData">Login</button>
    </div>
 </template>
 <script>
 export default {
    name: 'LoginForm',
    methods:{
        LoginData(){
            console.log("LoginForm",this.LoginForm.username,this.LoginForm.password)
        } 
    },

    data()
        {
            return {LoginForm:{
                username:null,
                password:null,
            }}
        }
}

</script>