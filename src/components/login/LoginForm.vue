<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  email: "",
  password: "",
});

const alert = ref("");

/**
 * Permet de valider le formulaire et connecter le user au dashboard
 */
const login = () => {
  if (formData.value.email === "" || formData.value.password === "") {
    alert.value = "Veillez renseigner tous les champs";
  } else if (!formData.value.email.includes("@")) {
    alert.value = "Veillez renseigner un email valide";
  } else if (formData.value.password.length < 11) {
    alert.value = "Le mot de passe doit comporter 12 caractères au moins";
  } else {
    console.log(router);
    router.push("/");
  }
};
</script>

<template>
  <form @submit.prevent="login">
    <div class="form-wrapper">
      <div class="input-group">
        <label for="email">Email address</label> <br />
        <input
          type="password"
          id="email"
          placeholder="Enter email"
          v-model="formData.email"
        />
        <small>We'll never share your email with anyone else.</small>
      </div>
      <div class="input-group">
        <label for="password">Email address</label><br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="formData.password"
        />
        <small class="alert">{{ alert }} </small>
      </div>
      <div class="stay-logged">
        <input type="checkbox" id="stay-logged" />
        <label for="stay-logged">Stay logged in</label>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </div>
  </form>
</template>


<style scoped>
.form-wrapper {
  padding: 20px 15px;
  margin: 0 auto;
  width: 500px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.185);
}

.input-group {
  margin: 20px 0;
}

.input-group label {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  margin: 20px 0;
}

.input-group input {
  width: 100%;
  padding: 10px 8px;
  border: none;
  background-color: #f1f5f9;
  color: #35343434;
  font-size: 12px;
  font-weight: 600;
}

.stay-logged {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}

button {
  margin: 10px 0;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  color: #fff;
  font-weight: 800;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3b82f6;
}

button:hover {
  background-color: #0f61e6;
}

.alert {
  font-size: 13px;
  font-weight: bolder;
  list-style-position: 2px;
  color: rgba(197, 15, 15, 0.897);
}
</style>