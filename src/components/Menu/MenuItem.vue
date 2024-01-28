<template>
    <div>
        <RouterLink :to="props.path ||''">{{ props.name }}</RouterLink>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    path:String,
    name:String

})


</script>