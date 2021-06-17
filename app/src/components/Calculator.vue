<template>
  <div class="wrapper">
    <div class="nav">
      <button id="logout" type="submit" @click="redirectToSignIn">LOGOUT</button>
    </div>
    <div class="hello">
      <h1>Simple <span>Maths</span></h1>
      <p>Factorial | Squareroot | Multiples</p>
    </div>
    <div class="calculator-container">
      <div class="factorial">
        <p class="title">Factorial</p>
        <span>
          <input
            type="number"
            name="fact"
            placeholder="Enter Number"
            v-model="factNumber"
          />
          <input
            type="submit"
            value="Compute Factorial"
            @click="fact(factNumber)"
          />
        </span>
        <p v-if="factorial">Factorial is {{ factorial }}</p>
      </div>
      <div class="squareroot">
        <p class="title">Square Root</p>
        <span>
          <input
            type="number"
            name="sqtr"
            placeholder="Enter Number"
            v-model="sqtrNumber"
          />
          <input
            type="submit"
            value="Compute Square Root"
            @click="sqtr(sqtrNumber)"
          />
        </span>
        <p v-if="squareRoot">Square root is {{ squareRoot }}</p>
      </div>
      <div class="multiples">
        <p class="title">Multiples</p>
        <span>
          <input
            type="number"
            name="num1"
            placeholder="Enter First Number"
            v-model="num1"
          />
          <input
            type="number"
            name="num2"
            placeholder="Enter Second Number"
            v-model="num2"
          />
          <input
            type="submit"
            value="Compute Common Multiples"
            @click="lcm(num1, num2)"
          />
        </span>
        <p v-if="lcms">Common multiples: {{ lcms }}</p>
      </div>
    </div>
    <div v-if="results.length" class="calculator-history">
      <table>
        <thead>
          <th>Computation</th>
          <th>Input</th>
          <th>Output</th>
        </thead>
        <tbody>
          <tr v-for="(result, index) in results" :key="index">
            <td>{{ result.computation }}</td>
            <td>{{ result.input }}</td>
            <td>{{ result.output }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",

  data() {
    return {
      factNumber: null,
      factorial: null,
      sqtrNumber: null,
      squareRoot: null,
      num1: null,
      num2: null,
      lcms: null,
      results: [],
    };
  },

  methods: {
        redirectToSignIn() {
      this.$router.push({
        name: "SimpleMaths",
      });
    },

    fact(num) {
      var rval = 1;
      for (var i = 2; i <= num; i++) {
        rval = rval * i;
      }
      this.factorial = rval;

      this.results.unshift({
        computation: "Factorial",
        input: this.factNumber,
        output: this.factorial,
      });
    },

    sqtr(num) {
      this.squareRoot = Math.sqrt(num);
      this.results.unshift({
        computation: "Square root",
        input: num,
        output: this.squareRoot,
      });
    },

    lcm(num1, num2) {
      let limit = 100;
      let numArray = [];
      for (let i = 1; i <= limit; i++) {
        numArray.push(i);
      }
      let multiplesOfNum1 = numArray.map((num) => num * num1);
      let multiplesOfNum2 = numArray.map((num) => num * num2);

      this.lcms = multiplesOfNum1
        .filter((multiple) => multiplesOfNum2.includes(multiple))
        .slice(0, 5);

      this.results.unshift({
        computation: "Multiples",
        input: [num1, num2],
        output: this.lcms,
      });
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 37px;
  background: currentColor;
}

.nav #logout {
  float: right;
    background: none;
    border: none;
    margin: 9px;
    color: white;
}
.hello {
  margin: 40px;
}
.calculator-container {
  display: flex;
  justify-content: space-evenly;
}

.calculator-container div {
  padding: 50px 65px;
}

.factorial {
  border: 1px solid cadetblue;
}

.factorial .title {
  background: cadetblue;
}

.squareroot {
  border: 1px solid #a05f5f;
}

.squareroot .title {
  background: #a05f5f;
}

.multiples {
  border: 1px solid #4e026d;
}

.multiples .title {
  background: #4e026d;
}

.title {
  color: white;
  padding: 2px 6px;
  margin: 0;
  position: relative;
  bottom: 60px;
}

span {
  display: flex;
  flex-direction: column;
}

span input {
  margin: 5px;
}

table {
  width: 50%;
  margin: 40px auto;
}
</style>
