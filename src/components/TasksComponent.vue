<template>
  <div class="container mt-4">
    <h1 class="mb-3">Tasks:</h1>
    <div>
     <div class="input-group mb-3">
        <input
          v-model="strStatus"
          type="text"

          class="form-control"

          aria-label="Recipient's username"

          aria-describedby="button-addon2"
       />
        <button class="btn btn-outline-secondary" type="button" @click="add(strStatus)">Post</button>
          </div>

     <div class="list-group">
        <div class="list-group-item" v-for="(post, index) in statPosts" :key="index">
          {{ post }}
            <button class="btn btn-danger btn-sm float-end" @click="remove(index)">Delete</button>
        </div>

      </div>
     </div>
  </div>

</template>

<script>
export default {

  name: "TasksComponent",
  data() {
    return {
      statPosts: [],
      
      strStatus: '',
    };
  },

  methods: {
    add(status) {
      if (status.trim() !== '') {
        this.statPosts.unshift(status);

        this.strStatus = '';
      }
    },

    remove(index) {
      this.statPosts.splice(index, 1);
    },
  },
};
</script>

<style scoped>
</style>
