<script setup>
import Nav from "./Nav.vue";
import Timer from "./Timer.vue";
</script>
<template>
  <header>
    <div class="wrapper">
      <Nav />
    </div>
    <Timer />
  </header>
</template>


<style scoped>
header {
  padding: 16px 8px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: rgb(29 78 216);
}


</style>