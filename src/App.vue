<template>
  <div id="app">
    <router-view />
  </div>
</template>



<script>
// 页面刷新时浏览器存储的用户数据不消失
import jwt_decode from "jwt-decode";
export default {
  name: "App",
  components: {},
  created() {
    if (localStorage.eleToken) {
      const decode = jwt_decode(localStorage.eleToken);
      // token存储到Vuex
      this.$store.dispatch("setAutenticated", !this.isEmpty(decoded));
      this.$store.dispatch("setUser", decoded);
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style>
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px "微软雅黑", "Arial Narrow", HELVETICA;
  background: #333;
  -webkit-text-size-adjust: 100%;
  color: #6583a7;
}
a {
  color: #2b5a8c;
  text-decoration: none;
}
a:hover {
  color: #333;
  text-decoration: none;
}
b {
  font-weight: 100;
}
/* em{font-style:normal} */
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
i {
  font-style: normal;
}
::selection {
  background-color: #a0cef5;
}
</style>
