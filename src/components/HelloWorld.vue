<template>
  <div class="text-center">
    <h1>Welcome {{ firstName }} {{ lastName }}!</h1>
    <div class="form-group">
      <label>What is your name?</label>
        <div class="mb-2">
        <input v-model="firstName" type="text" placeholder="First Name" class="form-control" />
      </div>

      <div class="mb-2">
        <input v-model="lastName" type="text" placeholder="Last Name" class="form-control" />
      </div>

        </div>
    <div class="form-group">
      <label>
        <input type="radio" value="Ocean" v-model="selectedOption" /> Ocean
     </label>
      <label class="ml-2">
        <input type="radio" value="Mountain" v-model="selectedOption" /> Mountain
        </label>
    </div>

    <div class="mt-4">
       <img v-if="selectedOption === 'Mountain'" :src="mountainImage" alt="Mountain" class="img-fluid" />
      <img v-if="selectedOption === 'Ocean'" :src="oceanImage" alt="Ocean" class="img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName: '',
      lastName: '',
      selectedOption: 'Mountain',
      mountainImage: require('@/assets/mountain.jpg'),
      oceanImage: require('@/assets/ocean.jpg'),
    };
  },
};
</script>

<style scoped>

.form-control {
  max-width: 300px;
  margin: 0 auto;
}
.ml-2 {
  margin-left: 10px;
}
.mt-4 {
  margin-top: 20px;
}
</style>
