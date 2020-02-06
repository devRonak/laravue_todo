<template>
    <v-app>
        <v-navigation-drawer></v-navigation-drawer>
        <v-toolbar></v-toolbar>
        <v-content>
            <v-container fluid>
                <router-link tag="li" to="/">Home</router-link>
                <router-link tag="li" to="/about">About</router-link>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
