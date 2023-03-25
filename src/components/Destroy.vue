 <template>
    <div>
        <h1>{{ name }}</h1>
    </div>
 </template>

 <script>
 export default {
    name:'DestroyData',
    data()
    {
       return {
        name:"Home Component"
       }
    },
    beforeDestroy()
    {
        alert("before")
        console.warn("before destroy")
    },
    destroyed()
    {
        alert("destroyed")
        console.warn("destroyed")
    }
 }
 </script>