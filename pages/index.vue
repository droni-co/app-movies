<template>
  <div>
    <MoviesBanner />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
      <MoviesCard v-for="item in items" :key="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>
