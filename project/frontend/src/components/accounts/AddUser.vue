<template>
  <div>
    <div>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn bottom color="green" dark fab fixed right @click="dialog = !dialog" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Adicionar Usuário</span>
      </v-tooltip>
    </div>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-form @submit="onSubmit">
          <v-card-title>
            <v-avatar size="40px" class="mx-3">
              <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
            </v-avatar>Novo Usuário
          </v-card-title>
          <v-container>
            <v-text-field v-model="userName" :rules="rules" label="Nome">
              <v-icon slot="prepend">mdi-account-circle</v-icon>
            </v-text-field>
            <v-text-field
              v-model="userEmail"
              :rules="email"
              label="Email"
              v-on:keyup.enter="onSubmit"
            >
              <v-icon slot="prepend">mdi-mail</v-icon>
            </v-text-field>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="primary" @click="dialog = false">Cancelar</v-btn>
            <v-btn text @click="onSubmit">Adicionar Usuário</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddUser",
  data: () => ({
    dialog: false,
    userName: "",
    userEmail: "",
    user: "",
    rules: [
      // Name validation
      value => !!value || "Requerido.",
      value => (value && value.length >= 3) || "Mínimo 3 caracteres"
    ],
    email: [
      // Email validation
      value => !!value || "Requerido.",
      value =>
        !value ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        "E-mail inválido"
    ]
  }),
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      console.log("submit");
      e.preventDefault();
      this.user = {
        name: this.userName,
        email: this.userEmail
      };
      this.dialog = false;
      this.addUser(this.user);
    }
  }
};
</script>

<style scoped>
.field {
  color: "grey lighten-1";
}
</style>