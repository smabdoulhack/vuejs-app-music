<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  playingData: { type: Object, required: true },
  isPlaying: { type: Boolean },
});

const emit = defineEmits(["stopPlay"]);

const trackCount = props.playingData?.tracks?.length;

// La progression actuelle
const progress = ref(0);

// La progression maximale
const maxProgress = ref(28);

// Durée totale
const totalDuration = ref(0);

// Données de la track courante
const currentTrackData = ref({
  number: 0,
  title: "",
});

const trackList = props.playingData?.tracks.map((track) => {
  const trackDuration = parseInt(track.duration.split(":")[0]);
  totalDuration.value += trackDuration;
  return { ...track, trackDuration };
});

/** Permet de lire les titres de l'album */
const play = async () => {
  let totalstep = 0;
  for (const track of trackList) {
    currentTrackData.value.title = track.title;

    console.log("title", currentTrackData.value.title);

    currentTrackData.value.number++;

    const totalstep = (track.trackDuration * 100) / totalDuration.value;

    console.log("totalstep", totalstep);

    const step = totalstep / track.trackDuration;

    console.log("step", step);

    const interval = track.trackDuration * 1000; // Interval en millisecondes (1 seconde)

    console.log("interval", interval);

    // Attendre chaque intervalle
    const current = await new Promise((resolve) => {
      const intervalId = setInterval(() => {
        progress.value += step;
        if (progress.value >= 1) {
          clearInterval(intervalId);
          resolve();
        }
      }, interval);
    });
  }
  emit("stopPlay", false);
};

console.log("totalDuration", totalDuration.value);
console.log("trackList", trackList);

/* lance la fonction play() lorsque le bouton Play est cliqué */
watch(
  () => props.isPlaying,
  (property) => {
    if (props.isPlaying) play();
  }
);

onMounted(() => {
  play();
});
</script>

<template>
  <div class="progress-bar-wrapper">
    <div>
      <label for="playlist-progress"
        >Title: {{ currentTrackData.title }}, Artist:
        {{ props.playingData.artist }}
      </label>
    </div>
    <div>
      <progress
        id="playlist-progress"
        :max="maxProgress"
        :value="progress"
      ></progress>
    </div>
    <div>
      {{ currentTrackData.number }}/{{ props.playingData.tracks.length }}
    </div>
  </div>
</template>

<style scoped>
.progress-bar-wrapper {
  text-align: left;
}

.progress-bar-wrapper progress {
  height: 20px;
  width: 100%;
}
</style>