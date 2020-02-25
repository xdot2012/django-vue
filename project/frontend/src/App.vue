<template>
  <v-app>
    <v-content>
      <Main />
      <!-- <LoginPage /> -->
    </v-content>
  </v-app>
</template>

<script>
import Main from "./components/Main";
// import LoginPage from "./components/LoginPage";

export default {
  name: "App",

  components: {
    Main
    // LoginPage
  },

  data: () => ({
    //
  })
};
</script>
