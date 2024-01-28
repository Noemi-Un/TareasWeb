<template>
    <div>
        <MenuItem v-for="route in routeViews" :name:="route.name" :path="route.path"></MenuItem>
    </div>
</template>

<script lang="ts" setup>

import MenuItem from './MenuItem.vue'
import router from '@/router/index'

const routeViews = router.options.routes;
</script>