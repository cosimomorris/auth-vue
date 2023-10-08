<template>
  <v-container>
    <v-card class="rounded-card" elevation="12">
      <v-card-title class="text-center">
        <h1>Confidential Data</h1>
        <v-divider></v-divider>
      </v-card-title>

      <v-card-text class="text-center bold-text">
        <div class="user-data">
          <div class="headline text--primary">
            Current Time: {{ currentTime }}
          </div>
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

.bold-text {
  font-weight: bold;
  font-size: 16px;
}

.user-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

<script>
export default {
  name: "PrivatePage",
  components: {},
  data() {
    return {
      currentTime: new Date().toLocaleString(),
    };
  },
  created() {
    this.updateTime();
  },
  methods: {
    updateTime() {
      setInterval(() => {
        this.currentTime = new Date().toLocaleString();
      }, 1000);
    },
  },
};
</script>
