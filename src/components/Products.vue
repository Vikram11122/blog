<template>
    <div class="users">
        <h1>Product Component</h1>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        'ProductsPage'
    }
});
</script>

<style scoped>
.users{
    background-color: antiquewhite;
    height: 100px;
    width: 300px;
    padding: 42px;
}

</style>
