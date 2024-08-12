<template>
  <nav>
    <ul>
      <li><RouterLink to="/" class="gradient-text">MUZART</RouterLink></li>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/login">Se connecter</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
nav > ul {
  padding-left: 0;
}

nav > ul {
  display: flex;
  gap: 20px;
}

nav > ul > li {
  list-style: none;
}

.gradient-text {
  font-size: 1.2em; /* Taille de la police */
  font-weight: bold;
  background: linear-gradient(to right, #ff8a00, #e52e71, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.router-link-active {
  font-weight: 800;
}
</style>