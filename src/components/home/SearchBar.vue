<script setup>
import { ref, watch } from "vue";
const emit = defineEmits(["emitKeyWord"]);

const keyword = ref("");

/* Emet le mot clef recherché au composant Albums
  à chaque changement de valeur du champ de saisi
*/
watch(keyword, (newVal) => {
  emit("emitKeyWord", newVal);
});
</script>
<template>
  <div class="search-wrapper">
    <form>
      <input
        type="search"
        name="sarchbar"
        id="sarchbar"
        placeholder="..."
        v-model="keyword"
      />
      <button>Search</button>
    </form>
  </div>
</template>

<style>
.search-wrapper {
  display: flex;
}

form {
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.search-wrapper input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  outline: 1px solid transparent;
}

.search-wrapper input:focus {
  outline: 1px solid #94a3b8;
}

.search-wrapper button {
  margin-left: 10px;
  border: none;
  padding: 8px 24px;
  border-radius: 5px;
  color: #fff;
  background-color: #6b7280;
}
</style>