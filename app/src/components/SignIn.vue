<template>
  <div class="container">
    <p>123 Go!</p>
    <div class="inputFields">
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <input type="submit" value="Sign In" @click="redirectToCalculator" />
      <input
        type="submit"
        value="Sign Up"
        id="signup"
        @click="$emit('toggle-auth')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",

  methods: {
    redirectToCalculator() {
      this.$router.replace({
        name: "Calculator",
      });
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid;
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

input[id="signup"] {
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
