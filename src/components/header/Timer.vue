<script setup>
import { ref, watch, onMounted } from "vue";

const displayTimer = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
});

onMounted(() => {
  setInterval(() => {
    if (displayTimer.value.seconds === 60) {
      displayTimer.value.seconds = 0;
      displayTimer.value.minutes += 1;
    }
    if (displayTimer.value.minutes === 60) {
      displayTimer.value.seconds = 0;
      displayTimer.value.minutes += 1;
    }
    displayTimer.value.seconds++;
  }, 1000);
});

const timeFormat = (number) => {
  if (number < 10) return "0" + number;
  return number
};

// const time = () => {
//   setTimeout(() => {}, 1000);
// };

// watch(displayTimer, (newDisplayTimer) => {});
</script>
<template>
  <div>
    <span
      >{{
        "Time: " +
        timeFormat(displayTimer.hours) +
        " h " +
        timeFormat(displayTimer.minutes) +
        " min " +
        timeFormat(displayTimer.seconds) +
        " s"
      }}
    </span>
  </div>
</template>


<style></style>