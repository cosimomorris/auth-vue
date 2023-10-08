<template>
  <v-app class="custom-bg">
    <v-toolbar color="black" dark>
      <v-toolbar-title>Auth0 & Vue.js</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text router exact> Home </v-btn>
      <v-btn to="/about" text router> About </v-btn>
      <v-btn to="/private" text router> Private </v-btn>
    </v-toolbar>
    <v-container fluid>
      <v-main>
        <div class="centered-content">
          <!-- Add this div -->
          <router-view></router-view>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import { isLogged } from "./utils/auth";

export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    // Add some debugging logs
    console.log("Checking authentication...");
    this.isAuthenticated = isLogged();
    console.log("isAuthenticated:", this.isAuthenticated);
  },
};
</script>

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav-link {
  color: white !important;
}

/* Define a custom background color for the entire app */
.custom-bg {
  background-color: #1b4b66; /* Change this to your desired color */
}
</style>
