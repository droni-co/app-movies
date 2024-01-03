<template>
  <div>
    <UiCard class="p-3 mb-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <form method="post" @submit.prevent="storeMovie">
            <div>
              <UiInput
                type="text"
                placeholder="Nombre de la película"
                class="w-full"
                v-model="newMovie.name"
                />
            </div>
          </form>
        </div>
        <div>09</div>
      </div>
    </UiCard>
  </div>
</template>
<script setup lang="ts">
const newMovie = {
  name: '',
  description: '',
  year: '',
  duration: '',
  cover: '',
  trailer: '',
  rating: '',
  genres: [],
  actors: [],
  directors: []
}
const storeMovie = () => {
  console.log('storeMovie')
}
</script>