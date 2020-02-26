<template>
  <div>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-form @submit="onSubmit">
          <v-card-title class="indigo darken-2">
            <v-avatar size="40px" class="mx-3">
              <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
            </v-avatar>Novo Usuário
          </v-card-title>
          <v-container>
            <v-text-field :rules="rules" label="Nome">
              <v-icon slot="prepend">mdi-account-circle</v-icon>
            </v-text-field>
            <v-mail-field label="Email" />
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="primary" @click="dialog = false">Cancelar</v-btn>
            <v-btn text @click="dialog = false">Adicionar Usuário</v-btn>
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
  methods: {
    ...mapActions(["addUser"])
  },
  data: () => ({
    dialog: false,
    rules: [
      value => !!value || "Requerido.",
      value => (value && value.length >= 3) || "Mínimo 3 caracteres"
    ]
  })
};
</script>

<style scoped>
.field {
  color: "grey lighten-1";
}
</style>