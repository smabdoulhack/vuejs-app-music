<script setup>
import { ref } from "vue";

// datas
import albums from "../../assets/data";

// Components
import SearchBar from "./SearchBar.vue";
import Pagination from "./Pagination.vue";
import Album from "./Album.vue";
import Aside from "./Aside.vue";

// refs
const asideData = ref(null);

const setAsideData = (album) => {
  console.log("asideData", asideData.value);
  console.log("album", album);
  asideData.value = album;
};

</script>
<template>
  <main class="main">
    <Aside v-if="asideData !== null" :asideData="asideData" />
    <section class="section">
      <SearchBar />
      <h1>Page principale Album Music</h1>
      <Pagination />
      <Album
        v-for="(data, index) in albums"
        :key="index"
        :data="data"
        @displayTraks="setAsideData"
      />
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.section {
  flex: 1;
  text-align: center;
  border: 1px solid blue;
}
</style>