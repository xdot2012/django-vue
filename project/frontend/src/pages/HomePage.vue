<template>
  <v-container>
    <v-row class="d-flex justify-space-between">
      <!-- TODO - MAKE EACH CARD A COMPONENT -->
      <v-card color="cyan" :height="150" :width="250" dark>
        <v-card-title>SOME USEFUL INFO</v-card-title>
        <v-card-text>This card can be used to show some useful data</v-card-text>
      </v-card>

      <v-card color="green" :height="150" :width="250" dark>
        <v-card-title>SOME USEFUL INFO</v-card-title>
        <v-card-text>This card can be used to show some useful data</v-card-text>
      </v-card>

      <v-card color="orange" :height="150" :width="250" dark>
        <v-card-title>SOME USEFUL INFO</v-card-title>
        <v-card-text>This card can be used to show some useful data</v-card-text>
      </v-card>

      <v-card color="red" :height="150" :width="250" dark>
        <v-card-title>SOME USEFUL INFO</v-card-title>
        <v-card-text>This card can be used to show some useful data</v-card-text>
      </v-card>

      <v-card :height="300" :elevation="10">
        <v-card-title>SOME USEFUL INFO</v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Número</th>
                  <th class="text-left">Nome</th>
                  <th class="text-left">Preço</th>
                  <th class="text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>test</td>
                  <td>R$ 150</td>
                  <td>
                    TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO
                    TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>test</td>
                  <td>R$ 5000,20</td>
                  <td>
                    TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO
                    TEXTO TEXTO TEXTO
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>test</td>
                  <td>R$ 300</td>
                  <td>
                    TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO
                    TEXTO TEXTO TEXTO
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style>
</style>