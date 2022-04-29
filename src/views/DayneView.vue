<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="container">
           
              <div class="mb-3 row">
                <label for="txt_in" class="col-sm-2 col-form-label">In</label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                    name="txt_in"
                    id="txt_in"
                    placeholder="In"
                    v-model="move.in"
               
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="txt_in" class="col-sm-2 col-form-label">Out</label>
                <div class="col-sm-10">
                  <input
                    type="number"
                    class="form-control"
                   placeholder="Out"
                    v-model="move.out"
                    
                  />
                </div>
              </div>
              <!-- desc -->
              <div class="mb-3 row">
                <label for="txt_in" class="col-sm-2 col-form-label">Desc</label>
                <div class="col-sm-10">
                  <textarea
                 
                    class="form-control"
                   placeholder="Description"
                    v-model="move.desc"
                    
                  />
                </div>
              </div>

              <div class="mb-3 row">
                <div class="offset-sm-2 col-sm-10">
                  <button type="submit" class="btn btn-primary" @click.stop="add">
                    Add
                  </button>
                </div>
              </div>
          
          </div>
        </div>
        <div class="col-md-8">
          <table
            class="
              table table-bordered table-hover table-responsive
              text-center
            "
          >
            <thead class="thead-default table-dark">
              <tr>
                <th>#</th>
                <th>In</th>
                <th>Out</th>
                <th>Dr</th>
                <th>Desc</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in moves" :key="index">
                <td scope="row">{{ index+1 }}</td>
                <td>{{ item.in }}</td>
                <td>{{ item.out }}</td>
                <td>{{ item.dr }}</td>
                <td>{{ item.desc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { add, update, del, all, get } from "../firebase/Crud";
document.querySelector("title").text = "Dayne - All";

export default {
  components: {},
  data() {
    return {
      tableName: "moves",
      moves: [],
      move: {
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
      this.moves = await all(this.tableName);
    },

    add: async function () {
      await add(this.move, this.tableName);
      this.get();
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