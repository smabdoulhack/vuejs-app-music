<script setup>
import { computed, ref } from "vue";

// datas
import albums from "../../assets/data";

// Components
import ProgressBar from "./ProgressBar.vue";
import SearchBar from "./SearchBar.vue";
import Pagination from "./Pagination.vue";
import Album from "./Album.vue";
import Aside from "./Aside.vue";

const asideData = ref(null);
const albumArray = ref(albums);
const searchKeyWord = ref("");

console.log("albumArray", albumArray.value);

const filtredAbums = computed(() => {
  const searchTerm = searchKeyWord.value.toLowerCase();
  return albumArray.value.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );
});

// passe à true play est cliqué
const isPlaying = ref(false);

/**
 * Reçoit les données de la sidebar
 * @param { object } album
 */
const setAsideData = (album) => {
  asideData.value = album;
};

/** Cette fonction filtre les albums en fonction du mot clef saisi dans la searchbar */
const searchAlbum = (keyWord) => {
  console.log("keyWord", keyWord);
  searchKeyWord.value = keyWord;
};
</script>

<template>
  <main class="main">
    <Aside
      v-if="asideData !== null"
      :asideData="asideData"
      @playTracks="isPlaying = true"
    />
    <section class="section">
      <ProgressBar
        v-if="isPlaying"
        :isPlaying="isPlaying"
        :playingData="asideData"
        @stopPlay="isPlaying = false"
      />
      <SearchBar @emitKeyWord="searchAlbum" />
      <h1>Page principale Album Music</h1>
      <Pagination />
      <Album
        v-for="(data, index) in filtredAbums"
        :key="index"
        :data="{ ...data, index }"
        @emitAsideData="setAsideData"
      />
    </section>
  </main>
</template>

<style scoped>
.main {
  min-height: 105vh;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.section {
  flex: 1;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

@media (max-width: 678px) {
  .main {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>