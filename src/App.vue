<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "./assets/global-style.scss";

body {
    margin: 0px;
    padding: 0px;
}

#app {
    /*font-family: 'Raleway', sans-serif;*/
}
</style>
