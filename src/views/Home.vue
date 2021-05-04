<template>
  <div class="home mx-auto bg-cyan-300 sm:bg-cyan-300 tablet:bg-gg-light">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
