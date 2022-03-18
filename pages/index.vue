<template>
  <div class="main-content">
    <div class="header-text">
      <h1>Test application</h1>
    </div>
    <div data-app>
      <Editor />
    </div>
  </div>
</template>

<script>
import Editor from "../components/Editor.vue";

export default {
  components: {
    Editor,
  },
};
</script>

<style>
</style>