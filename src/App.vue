<template>
 <v-app>
      <v-navigation-drawer app color="teal">
        <v-list class="py-1">
            <v-avatar  style="height: 131px;min-width: 48px;width: 130px; margin-left: 51px;" class="text-center">
              <img src="../public/Pankaj_Kumar_Mishra.jpg">
            </v-avatar>
            <v-card-text class="white--text" style="margin-left:26px;">Pankaj Kumar Mishra</v-card-text>
          <v-divider></v-divider>
           <v-spacer></v-spacer>
          <v-list-item
            v-for="link in links"
            :key="link.title"
            :to="link.route"
            class="white--text"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  <v-app-bar app color="teal">
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title><v-icon>{{item.icon}}</v-icon> &nbsp;&nbsp;{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
<!-- 
  <v-footer app color="#efefef">
          <div  justify="center" >This is Footer</div>
  </v-footer> -->
</v-app>
</template>



<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    icon:'mdi-email-outline',
    iconPhone:'mdi-card-account-phone-outline',
    items: [
        { title: 'pankajk.mishra4803@gmail.com', icon:'mdi-email-outline' },
        { title: '980734803',icon:'mdi-card-account-phone-outline' },
      ],
        links: [
          { title: 'Home', icon: 'mdi-home',route:'/home' },
          { title: 'Project', icon: 'mdi-file-cabinet', route:'/project' },
          {title:'Qualification', icon:'mdi-clipboard-file', route:'/qualification'},
          { title: 'Contact Us', icon: 'mdi-contacts' ,route:'/contact'},
          { title: 'Certification', icon: 'mdi-file-certificate' ,route:'/certification'},
        ],
    }),
};
</script>
