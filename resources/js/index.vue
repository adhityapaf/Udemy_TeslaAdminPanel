<template>
  <v-app style="background-color:black; height:100vh">
    <admin-navigator v-if="authenticated" />
    <client-navigator v-else />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AdminNavigator from "./components/admin/AdminNavigator.vue";
import ClientNavigator from "./components/client/ClientNavigator.vue";
import EventBus from './eventbus';
export default {
  components: { AdminNavigator, ClientNavigator },
  data: function() {
    return {
      authenticated: false
    }
  },
  methods: {
    authCheck() {
      axios.get('http://localhost:8000/api/user').then(response => {
        if (response.status >= 200 && response.status < 300) {
          this.authenticated = true
        }
      }).catch(error => this.authenticated = false)
    }
  },
  mounted() {
    var self = this
    this.authCheck();
    EventBus.$on('authCheck', function (payload) {
      self.authCheck()
    })
  }
};
</script>

<style>
</style>