<template>
     <div>
          <button v-on:click="updateTitle">Update  Parent Title </button>
     </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import { ChildProcess } from 'child_process';

export default {
    name: 'child',
    methods:{
        updateTitle(){
            this.$emit('changeTitle',"Like this video")
        }
    }
}
</script>
