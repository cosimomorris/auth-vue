<template>
  <div>
    <h1>Callback</h1>
  </div>
</template>

<script>
import { handleAuth } from "../utils/auth";

export default {
  name: "AuthCallback",
  beforeMount() {
    handleAuth((error) => {
      if (error) {
        console.log(error);

        return;
      }
      console.log("logged in");
      this.$emit("successful-login", true); // Emit the event after successful login
      this.$router.push("/private");
    });
  },
};
</script>
