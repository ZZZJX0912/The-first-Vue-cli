<template>
  <div id="app">
    <MyHeader />
    <img class="right-bg" src="@/img/plant.png" alt />
    <my-nav></my-nav>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>



<script>
import MyHeader from "@/components/header";
import MyNav from "@/components/nav";
import MyFooter from "@/components/footer";

export default {
  name: "App",
  components: {
    MyHeader,
    MyNav,
    MyFooter,
  },
};
</script>

<style>
.right-bg {
  width: 500px;
  height: 500px;
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 0;
}
body{
  margin: 0;
  /* background: url(./img/plant.png); */
  /* background-size: 500px; */
}

@media (max-width: 1899){
  body{
    max-height: 2397px;
  }
}
</style>
