<script setup>
import IconPlayCircle from "../icons/IconPlayCircle.vue";

const props = defineProps({
  asideData: { type: Object, required: true },
});

const emit = defineEmits(["playTracks"]);

/** Emet une valeur true au composant Albums lorsqu'on clique sur la touche "Play" */
const playTrakList = () => {
  emit("playTracks", true);
};
</script>

<template>
  <aside class="aside">
    <!-- aside hero -->
    <p class="aside-hero">
      <img src="https://unsplash.it/300/300" alt="" />
    </p>
    <h4 class="aside-title">{{ props.asideData.title }}</h4>
    <p class="name">name: {{ props.asideData.title }}</p>

    <!-- play button -->
    <div>
      <button @click="playTrakList" class="play-button">
        <span>Play</span> <IconPlayCircle />
      </button>
    </div>

    <!-- Songs List -->
    <p class="list-title">List of songs</p>
    <ul>
      <li v-for="(track, i) in props.asideData.tracks" :key="i">
        <em>{{ track.title }} </em>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.aside {
  height: fit-content;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  max-width: 316px;
  padding: 24px 8px;
  flex: 1;
  background-color: #fff;
}

.aside-title {
  font-size: 20px;
  font-weight: 700;
  color: #374151;
}

.name {
  margin: 12px 0;
}

.aside-hero {
  width: 300px;
  height: 300px;
}

.play-button {
  padding: 5px 10px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #3b82f6;
  border: none;
}

.play-button span {
  margin-right: 5px;
}

.play-button:hover {
  background-color: #002663e0;
}

.list-title {
  padding: 8px;
  margin: 25px 0;
  background-color: #1d4ed8;
  color: #fff;
}

ul {
  padding-left: 0;
}

ul > li {
  line-height: 3rem;
  font-style: italic;
}

</style>