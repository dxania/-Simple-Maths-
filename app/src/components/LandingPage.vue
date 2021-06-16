<template>
  <div class="hello">
    <h1>Simple <span>Maths</span> </h1>
    <p>
      Factorial | Squareroot | Multiples
    </p>
    <Register v-if="showRegisterContainer" @toggle-auth="toggleAuthContainer"/>
    <SignIn v-if="showSignInContainer" @toggle-auth="toggleAuthContainer"/>
  </div>
</template>

<script>
import Register from './Register.vue';
import SignIn from './SignIn.vue';

export default {
  name: 'LandingPage',

  components: {
    Register,
    SignIn
  },

  data() {
      return {
          showRegisterContainer: true,
          showSignInContainer: false
      }
  },

  methods: {
      toggleAuthContainer() {
          this.showSignInContainer = !this.showSignInContainer;
          this.showRegisterContainer = !this.showRegisterContainer;
      }
  }
  // props: {
  //   msg: String
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 span {
  font-style: italic;
    font-weight: normal;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
