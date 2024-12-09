<template>
    <div id="app">
        <main-page />
    </div>
</template>

<script>
import MainPage from './Components/MainPage.vue';

export default {
    name: 'App',
    components: {
        MainPage,
    },
};
</script>

<style>
body {
    background: linear-gradient(120deg, #101216, #1a1d25);
    color: #dbdbdb;
    font-family: 'Arial', sans-serif;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
