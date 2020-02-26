<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      color="grey darken-3"
      dark
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="indigo darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Protótipo</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
        /></v-avatar>
      </v-btn>
    </v-app-bar>

    <v-container fluid>
      <v-row class="d-flex justify-space-between">
        <v-subheader class="headline font-weight-bold">
          Dashboard
        </v-subheader>
        <v-div>
          <v-icon>mdi-home</v-icon>
          <v-breadcumbs>
            <v-breadcumbs-item>
              Home/Dashboard
            </v-breadcumbs-item>
          </v-breadcumbs>
        </v-div>
      </v-row>

      <v-row class="d-flex justify-space-around">
        <v-card color="cyan" :height="150" :width="250" dark>
          <v-card-title>
            SOME USEFUL INFO
          </v-card-title>

          <v-card-text>
            This card can be used to show some useful data
          </v-card-text>
        </v-card>

        <v-card color="green" :height="150" :width="250" dark>
          <v-card-title>
            SOME USEFUL INFO
          </v-card-title>

          <v-card-text>
            This card can be used to show some useful data
          </v-card-text>
        </v-card>

        <v-card color="orange" :height="150" :width="250" dark>
          <v-card-title>
            SOME USEFUL INFO
          </v-card-title>

          <v-card-text>
            This card can be used to show some useful data
          </v-card-text>
        </v-card>

        <v-card color="red" :height="150" :width="250" dark>
          <v-card-title>
            SOME USEFUL INFO
          </v-card-title>

          <v-card-text>
            This card can be used to show some useful data
          </v-card-text>
        </v-card>
      </v-row>

      <v-row class="d-flex justify-center ">
        <v-col class="mb-6">
          <v-card :height="300" :elevation="10">
            <v-card-title>
              SOME USEFUL INFO
            </v-card-title>
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
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
