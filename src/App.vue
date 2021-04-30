<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <NewComp />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import NewComp from "./components/NewComp.vue";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

fetch("https://vite-test.shashank8178.workers.dev/").then((response) =>
  console.log(response)
);
</script>

<style>
</style>
