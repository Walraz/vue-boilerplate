<template>
  <div id="app">
    <h1>{{ $store.state.message }}</h1>

    <md-button value="Default"></md-button>
    <md-button primary value="Primary"></md-button>
    <md-button accent value="Accent"></md-button>
    <md-button value="Default" :disabled="true"></md-button>
    <md-button value="Default" raised></md-button>
    <md-button primary raised value="Primary"></md-button>
    <form v-on:submit.prevent="onSubmit">
      <md-button accent raised @click="onSubmit" value="Accent"></md-button>
    </form>
    <md-button primary raised :disabled="true" value="Disabled"></md-button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      message: 'Vue Boilerplate',
    }),
    methods: {
      onSubmit() {
        this.$store.commit('editMessage', 'New message!!!')
      }
    }
  }
</script>

<style scoped>
  #app {
    height: 100vh;
    width: 100vw;
  }
  
  form {
    display: inline-block;
  }
</style>