<template>
  <v-container>
    <v-card class="rounded-card" elevation="12">
      <v-card-title class="text-center">
        <h1 class="soft-black">Sorry, You are not Authorized!</h1>
        <v-divider></v-divider>
      </v-card-title>

      <v-card-text class="text-center bold-text">
        <p>Current Time: {{ currentTime }}</p>
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

.bold-text {
  font-weight: bold;
  font-size: 16px;
}
</style>

<script>
export default {
  name: "NotAuthorized",
  components: {},
};
</script>
