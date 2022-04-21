<template>
  <div class="container-fluid">
    <div class="container">
      <ul class="list-unstyled">
        <li v-for="item in posts" :key="item.id">{{ item.title }}</li>
      </ul>
      <div class="d-grid gap-2">
       
        <button type="button" name="" id="" class="btn btn-info" @click="add">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      paseUrl:
        "https://firestore.googleapis.com/v1/projects/my-app-40d80/databases/(default)/documents/posts/",
      io: "",
      posts: [],
    };
  },
  methods: {
    get: async function () {
      await axios.get(this.paseUrl).then((res) => {
        //   var obj = JSON.parse(res.data);
        //this.posts = res.data.documents; //
        // console.log( this.posts );
        const querySnapshot = res.data;
        // querySnapshot.forEach((doc) => { });
        console.log(querySnapshot);
      });
    },
    add0: function () {
      var data={
         title:"t1000",
            body:"b1000",
      }
      axios
        .post(this.paseUrl,data, {
           headers: {
    'Authorization': `token ${access_token}`
  },
           
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add: function () {
      var body = {
    userName: 'Fred',
    userEmail: 'Flintstone@gmail.com'
}

axios({
    method: 'post',
    url:this.paseUrl ,//'/addUser'
    data: body
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
    },
    top: function () {},
  },
  mounted() {
    this.get();
  },
};
</script>

<style scoped>
.nav-btn {
  cursor: pointer !important;
}
</style>