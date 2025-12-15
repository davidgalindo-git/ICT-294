<script setup>

</script>

<template>
  <nav>
    <router-link to="/" class="nav-item">Evenements</router-link>
    <span> | </span>
    <router-link to="/about" class="nav-item">A propos</router-link>
  </nav>

  <hr> <router-view />
</template>

<style scoped>
.nav-item{
  color: black;
}
.nav-item:hover{
  color: #02a302;
}
</style>
