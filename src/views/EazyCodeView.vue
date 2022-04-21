<template>
  
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="mb-3">
          <label for="cbx_command" class="form-label">Command</label>
          <select
            class="form-control"
            v-model="cbx_command"
            name="cbx_command"
            id="cbx_command"
            @change="setCode()"
          >
            <option value="0">Select ...</option>
            <option :value="cmd.id" v-for="cmd in cmds" :key="cmd.id">
              {{ cmd.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="txt_tbl" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="txt_tbl"
            name="txt_tbl"
            id="txt_tbl"
            aria-describedby="help_tbl"
            placeholder=""
          />
        </div>
        <div class="button-group">
          <button type="button" class="btn btn-info" @click="getCode">Get</button>
        </div>
      </div>
      <div class="col-8">
        <div class="mb-3">
          <label for="" class="form-label">Code</label>
          <textarea class="form-control" v-model="code" rows="11"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h_id: null,
      isnew: false,
      code: "",
      txt_tbl: "",
      cbx_command: "",
      cmds: [
        { id: 1, name: "Route" },
        { id: 2, name: "View" },
        { id: 3, name: "Route Link" },
      ],
    };
  },
  computed: {
    tbl_cap() {
      const str2 = this.txt_tbl.charAt(0).toUpperCase() + this.txt_tbl.slice(1);
      return str2;
    },
  },
  methods: {
    setCode() {
      if (this.cbx_command == 1) {
        this.code = `touch src/views/${this.tbl_cap}View.vue
         \rnotepad src/views/${this.tbl_cap}View.vue
         \rnotepad src/router/index.js
         \rimport ${this.tbl_cap}View from "../views/${this.tbl_cap}View.vue";
        \r{
            \rpath: "/${this.txt_tbl}",
            \rname: "${this.tbl_cap}View",
            \rcomponent: ${this.tbl_cap}View,
         \r },
        `;
      } 
      else if (this.cbx_command == 2) {
        this.code = `<template></template>
          
          export default {
            components: {},
            data() {},
            methods: {
              get: async function () {
                this.posts = await getAll();
              },
            },
            mounted() {
            
            },
          };


          <style scoped>
          .nav-btn {
            cursor: pointer !important;
          }
          </style>
        `;
      }
    },
    getCode() {
      this.code=this.code.replaceAll('\n','\\n')
    },
    e() {},
  },
  mounted() {
    //this.
  },
};
</script>

<style>
</style>