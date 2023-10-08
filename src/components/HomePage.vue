<template>
  <v-container>
    <v-card class="rounded-card" elevation="12">
      <v-card-title class="text-center">
        <h1 class="soft-black">Welcome to Auth0 with Vue.js.</h1>
        <v-divider></v-divider>
      </v-card-title>

      <v-card-text class="text-center lighter-gray">
        <div v-if="!isLogged" class="flex-column">
          <v-small class="mb-2">Not Logged In?</v-small>
          <v-btn class="gray-button" @click="loginClick">Login</v-btn>
        </div>

        <div v-else class="flex-column">
          <v-small class="mb-2">You are logged In</v-small>
          <v-btn class="gray-button" @click="logOut">LogOut</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.rounded-card {
  border-radius: 15px;

  padding: 20px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gray-button {
  background-color: #ccc; /* This is a lightish gray. Adjust as needed. */
  color: black; /* Setting text color to black for better contrast */
}
</style>

<script>
import { login, isLogged, logUserOut } from "../utils/auth";

export default {
  name: "HomePage",
  data() {
    return {
      isLogged: isLogged(),
    };
  },
  methods: {
    loginClick() {
      login();
    },
    logOut() {
      this.isLogged = false;
      logUserOut();
    },
  },
};
</script>
