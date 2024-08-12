<script setup>
import IconFavorite from "../icons/IconFavorite.vue";
import IconTimer from "../icons/IconTimer.vue";

const props = defineProps({
  data: { type: Object, required: true },
});

const emit = defineEmits(["emitAsideData"]);

/** Emet au composant Albums les données à aficher dans aside  */
const emitAsideData = () => {
  emit("emitAsideData", {
    title: props.data.title,
    artist: props.data.artist,
    tracks: props.data.tracks,
    trackCount: props.data.trackCount,
  });
};
</script>
<template>
  <!-- Composant représentant un album -->
  <div class="album-card">
    <div class="card-header">
      <h4>{{ props.data.genre }}</h4>
    </div>
    <RouterLink :to="'/albums/' + props.data.index" class="title"
      >{{ props.data.title }}
    </RouterLink>
    <div>
      <p class="description">{{ props.data.description }}</p>
    </div>
    <div class="card-footer">
      <!-- tags list start-->
      <ul>
        <li v-for="(tag, i) in props.data.tags" :key="i">{{ tag }}</li>
      </ul>
      <!-- tags list end-->
      <p>
        <a href="">en</a>
        <span> <IconFavorite class="favorite-icon" /> 5 </span>
        <!-- <span> <IconTimer /> {{  props.data?.duration.split(":")[0] }} min </span> -->
        <a class="details-button" @click.prevent="emitAsideData">Details</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.album-card {
  font-family: Roboto, sans-serif;
  max-width: 700px;
  padding: 16px 8px;
  margin: 30px auto;
  text-align: left;
  color: #374151;
  background-color: #fff;
}

h4 {
  padding: 8px 0px;
  font-size: 14px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  background-color: #e9d5ff;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: #374151;
}

.title:hover {
  text-decoration: underline;
}

.description {
  padding-top: 15px;
  font-size: 1rem;
}

ul {
  margin-top: 10px;
  display: flex;
  padding-left: 0;
}

ul li {
  list-style: none;
  padding: 4px 8px;
  margin-right: 20px;
  color: #fff;
  background: rgb(45 212 191);
}

.card-footer a {
  padding: 5px 8px;
  border: 0.5px solid rgba(0, 0, 0, 0.164);
}

.details-button {
  cursor: pointer;
}

.card-footer a:hover {
  color: #fff;
  background-color: #374151;
}

.card-footer p {
  margin: 10px 0;
  display: flex;
  gap: 10px;
}

.card-footer p span {
  display: flex;
  align-items: center;
}

.card-footer p svg {
  margin-right: 8px;
  cursor: pointer;
}
</style>