<template>
    <v-app>
        <v-content>
            <router-view></router-view>
        </v-content>
        <bottom-nav></bottom-nav>
    </v-app>
</template>

<script>
    import BottomNav from '../components/BottomNav'
    export default {
        name: "Layout",
        components:{
            "bottom-nav":BottomNav
        }
    }
</script>

<style scoped>

</style>
