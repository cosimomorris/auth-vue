<template>
  <v-container>
    <v-card class="rounded-card" elevation="12">
      <v-card-title class="text-center">
        <h1 class="soft-black">About</h1>
        <v-divider></v-divider>
      </v-card-title>

      <v-card-text class="text-center">
        <h2 class="lighter-gray">
          The goal of this app is to demonstrate an example of using Auth0 to
          authenticate users.
        </h2>
        <p class="lighter-gray">
          Initialization: The file starts by importing the auth0-js library.
          This library provides tools to interact with Auth0, a platform for
          authentication and authorization. It then initializes a webAuth object
          with configuration details for your Auth0 application, such as domain,
          client ID, redirect URL, response type, and scope. Token Management: A
          token object is defined to store authentication-related data. This
          will include an access token, an ID token, and an expiry time.
          handleAuth Function: After a user logs in via Auth0, they're
          redirected back to the specified redirectUri with authentication data
          in the URL hash. The handleAuth function parses this data from the
          hash. If valid tokens are found, they're stored in the token object
          along with their expiry time. If there's an error, it's logged to the
          console. isLogged Function: Checks if a user is logged in. A user is
          considered logged in if: An access token exists. The current time is
          before the token's expiry time. login Function: Directs the user to
          Auth0's login page. After logging in, the user will be redirected back
          to the specified redirectUri where the app can handle the
          authentication result. logUserOut Function: Resets the token object,
          effectively "logging out" the user from the application's perspective.
          In simpler terms: This file sets up and manages user authentication
          using the Auth0 service. It provides functions to log users in, check
          their login status, handle the authentication data returned by Auth0,
          and log users out.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "AboutPage",
  components: {},
};
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
  /* Set your desired background color here */
  padding: 20px;
}

.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
