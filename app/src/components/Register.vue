<template>
  <div class="container">
    <div class="inputFields">
      <p>Get Started</p>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="User Name"
      />
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <input
        type="password"
        name="password-rpt"
        id="password-rpt"
        placeholder="Confirm Password"
      />
      <input type="submit" value="Sign Up" @click="$emit('toggle-auth')"/>
      <input
        type="submit"
        id="signin"
        value="Sign In"
        @click="$emit('toggle-auth')"
      />
    </div>
  </div>
</template>

<script>
// import SignIn from './SignIn.vue';

export default {
  name: "Register",

  //   components: {
  //       SignIn
  //   },

  //   data() {
  //       return {
  //           showRegisterContainer: true,
  //           showSignInContainer: false
  //       }
  //   },

  //   methods: {
  //       toggleRegisterContainer() {
  //           this.showSignInContainer = true;
  //           this.showRegisterContainer = false;
  //       }
  //   }

  //   watch: {
  //       showSignInContainer(){

  //       }
  //   }
};
</script>

<style scoped>
.container {
  border: 1px solid;
  /* display: flex;
    justify-content: space-evenly; */
  margin: 0 auto;
  width: 30%;
  height: 400px;
  padding: 15px;
}

.container p {
  font-size: 35px;
  -webkit-text-emphasis: triangle;
}

.inputFields {
  display: flex;
  flex-direction: column;
}

.inputFields input {
  padding: 7px;
  margin: 5px;
}

input[type="submit"] {
  margin: 15px;
  background: #2c3e50;
  color: white;
  border-radius: 2px;
  border: none;
  cursor: pointer;
}

input[id="signin"] {
  background: inherit;
  color: #3458e2;
  border: none;
  margin: 0;
}

a {
  text-decoration: none;
  color: #0d58cc;
}
</style>
