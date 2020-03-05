<template>
  <div>
    <v-btn small color="error" @click="dialog = !dialog">Remover</v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-form @submit="onSubmit">
          <v-card-title>Apagar Usuário</v-card-title>
          <v-container>
            <label>Tem certeza de que deseja remover o Usuário?</label>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="dialog = false">Cancelar</v-btn>
            <v-btn color="success" @click="onSubmit">Confirmar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteUser",
  data: () => ({
    dialog: false
  }),
  methods: {
    onSubmit(e) {
      console.log("submit");
      e.preventDefault();
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
</style>