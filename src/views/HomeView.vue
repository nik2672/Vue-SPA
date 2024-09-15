<template>
  <div class="home container mt-4 text-center">
    <img alt="Vue logo" src="../assets/logo.png" class="mb-4" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>

.container {
  text-align: center;
}
.mb-4 {
  margin-bottom: 20px;
}
</style>
