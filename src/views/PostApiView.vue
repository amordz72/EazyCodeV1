<template>
<div class="container-fluid">
    <div class="container">
        
    </div>
</div>
</template>

<script>
export default {
  components: {},
  data() {
     return{ 
paseUrl:"URL=https://firestore.googleapis.com/v1/projects/my-app-40d80/databases/(default)/documents/posts",
io:'',
  }},
  methods: {
    get: async function () {
      this.posts = await getAll();
    },
  },
  mounted() {
   
  },
};
</script>

<style scoped>
.nav-btn {
  cursor: pointer !important;
}
</style>