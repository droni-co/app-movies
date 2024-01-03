<template>
  <div class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800" :class="{ '-translate-x-full': menu }">
    <div class="text-end">
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        class="inline-block text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 top-2.5 end-2.5 dark:hover:bg-gray-600 dark:hover:text-white"
        @click="menu = true">
          <i class="mdi mdi-close"></i>
          <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div v-if="currentUser">
      <NuxtLink to="/movies/create" class="" @click="menu=true">
        <UiAction>
          <i class="mdi mdi-plus"></i>
          Create Movie
        </UiAction>
      </NuxtLink>
    </div>
    <hr>
  </div>
  <button class="text-4xl text-white" @click="menu = false">
    <i class="mdi mdi-menu"></i>
  </button>
</template>
<script setup lang="ts">
const menu = ref(true)
const props = defineProps({
  currentUser: Object
})
</script>