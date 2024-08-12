<script setup>
import IconPlayCircle from "../icons/IconPlayCircle.vue";

const props = defineProps({
  asideData: { type: Object, required: true },
});
</script>
<template>
  <aside class="aside">
    <p class="aside-hero">
      <img src="https://unsplash.it/300/300" alt="" />
    </p>
    <h4>{{ props.asideData.title }}</h4>
    <p>name: {{ props.asideData.title }}</p>
    <div>
      <button class="play-button"><span>Play</span> <IconPlayCircle /></button>
    </div>
    <p>List of songs</p>
    <ul>
      <li v-for="(track, i) in props.asideData.tracks" :key="i">
        <em>{{ track.title }} </em>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.aside {
  max-width: 316px;
  padding: 24px 8px;
  flex: 1;
  background-color: #fff;
}

.aside-hero {
  width: 300px;
  height: 300px;
}

.play-button {
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.play-button span {
  margin-right: 5px;
}
</style>