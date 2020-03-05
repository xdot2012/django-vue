<template>
  <div>
    <v-card>
      <v-card-title>Usuários Cadastrados</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Nome</th>
                <th class="text-left">Email</th>
                <th class="text-left col-sm-1">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in allUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td class="text-right">
                  <v-btn small color="error" @click="deleteUser(user.id)">Remover</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <AddUser />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddUser from "./AddUser";

export default {
  name: "Users",
  data: () => ({
    dialog: false
  }),
  components: {
    AddUser
  },

  methods: {
    ...mapActions(["fetchUsers", "deleteUser"]) //Pull the Actions from modules
  },

  computed: mapGetters(["allUsers"]), //Get props from the state

  created() {
    //Run when the component is rendered
    this.fetchUsers();
  }
};
</script>

<style></style>
