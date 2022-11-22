<template>
  <NavBar />
  <router-view />
  <FooterView />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterView from "./components/Footer-View'.vue";
export default {
  components: { NavBar, FooterView },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: inherit;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #9583a3b5;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #868647cc;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
