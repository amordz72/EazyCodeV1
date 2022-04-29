<template>
  <div class="container-fluid">
    <div class="container">
      <table
        class="table table-bordered table-hover table-responsive text-center"
      >
        <thead class="thead-default table-dark">
          <tr>
            <th>#</th>
            <th>In</th>
            <th>Out</th>
            <th>Dr</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in moves" :key="index">
            <td scope="row">{{ index }}</td>
            <td>{{ item.in }}</td>
            <td>{{ item.out }}</td>
            <td>{{ item.dr }}</td>
            <td>{{ item.desc }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-grid gap-2">
        <button type="button" name="" id="" class="btn btn-info" @click="add">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { json } from "stream/consumers";

export default {
  components: {},
  data() {
    return {
      paseUrl: "https://dayne-v1-default-rtdb.firebaseio.com/move.json",
      io: "",
      maves: [],
      mave: {
        in: 0,
        out: 0,
        dr: 0,
        // date: "",
        // time: "",
        client: 1,
        desc: "",
      },
    };
  },
  methods: {
    get: async function () {
      var mm = this;
      await axios.get(this.paseUrl).then((res) => {
        const result = JSON.parse( res.data);
 result.forEach(element => {
     
 });

       mm.maves =  result;
       });
        

    },

    add: function () {
      axios({
        method: "post",
        url: this.paseUrl, //'/addUser'
        data: this.mave,
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
    this.get(); //
  },
};
</script>

<style scoped>
.nav-btn {
  cursor: pointer !important;
}
</style>