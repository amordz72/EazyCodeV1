<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
           

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/posts" v-if="isLogin">Posts</router-link>
                 <router-link class="dropdown-item" to="/postApi" v-if="isLogin">PostApi</router-link>
                 <router-link class="dropdown-item" to='/DayneView'>DayneApi</router-link>
                 <router-link class="dropdown-item" to="/eazyCode" v-if="isLogin">EazyCode</router-link>
               
               
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                {{ this.$store.state.user_name }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/auth" v-if="!isLogin">Auth</router-link>
                </li>
                <li>
                  <a class="dropdown-item" @click="logout" v-if="isLogin">logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>

<script>
import router from "../router";
import app from "../firebase/index";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(app);

export default {
  computed: {
    isLogin: function () {
      return this.$store.state.isLogin;
    },
    userLogin: function () {
      return this.$store.state.user;
    },
  },
  methods: {
    sbToggle: function () {
      var element = document.getElementById("sidebar");

      element.classList.toggle("sidebar-sm");
      var sidebar_ul = document.getElementById("sidebar-ul");
      sidebar_ul.classList.toggle("d-none");
    },
    onAuthStateChanged: function () {
      var me = this;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //    const uid = user.uid;
          me.$store.dispatch("set_user", user); //
          router.push("/"); //
          // ...
        } else {
          me.$store.dispatch("destroy_user"); //

          router.push("/auth"); //
        }
      });
    },
    logout: async function () {
      var me = this;

      await signOut(auth)
        .then(() => {
          //   router.push('/auth')   me.$store.dispatch("destroy_user");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  mounted() {
    this.onAuthStateChanged();
  },
};
</script>

<style>

</style>