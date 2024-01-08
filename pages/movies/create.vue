<template>
  <div>
    <UiCard class="p-3 mb-4">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <form method="post" @submit.prevent="storeMovie">
            <div class="mb-3">
              <label class="text-slate-600">Nombre de la película</label>
              <UiInput
                type="text"
                placeholder="Nombre de la película"
                class="w-full"
                v-model="newMovie.name"
                required
                />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="mb-3">
                <label class="text-slate-600">Codigo IMDB</label>
                <UiInput
                  type="text"
                  placeholder="IMDB"
                  class="w-full"
                  v-model="newMovie.imdb"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Descripción</label>
                <UiTextArea
                  type="text"
                  placeholder="Descripción"
                  class="w-full"
                  v-model="newMovie.description"
                  rows="5"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Géneros</label>
                <UiInput
                  type="text"
                  placeholder="Géneros"
                  class="w-full"
                  v-model="newMovie.genders"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Tags</label>
                <UiInput
                  type="text"
                  placeholder="Tags"
                  class="w-full"
                  v-model="newMovie.tags"
                  required
                  />
              </div>
            </div>
            <div class="mb-3">
              <label class="text-slate-600">Sinopsis</label>
              <UiTextArea
                type="text"
                placeholder="Sinopsis"
                class="w-full"
                v-model="newMovie.sinopsis"
                required
                />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="mb-3">
                <label class="text-slate-600">Año</label>
                <UiInputNumber
                  type="number"
                  placeholder="Año"
                  class="w-full"
                  v-model="newMovie.year"
                  :min="1900"
                  :max="2030"
                  :step="1"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Duración <small>(En minutos)</small></label>
                <UiInputNumber
                  type="number"
                  placeholder="Duración"
                  class="w-full"
                  v-model="newMovie.duration"
                  :min="0"
                  :max="300"
                  :step="1"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Idioma</label>
                <UiInput
                  type="text"
                  placeholder="Idioma"
                  class="w-full"
                  v-model="newMovie.language"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">Trailer (youtube Id)</label>
                <UiInput
                  type="text"
                  placeholder="Poster"
                  class="w-full"
                  v-model="newMovie.trailer"
                  required
                  />
              </div>
              <div class="mb-3">
                <label class="text-slate-600">País</label>
                <UiInput
                  type="text"
                  placeholder="País"
                  class="w-full"
                  v-model="newMovie.country"
                  required
                  />
              </div>
              <div class="mb-3">
                <UiSwitch
                  type="text"
                  label="Esta activa?"
                  placeholder="País"
                  class="mt-8 w-full"
                  v-model="newMovie.active"
                  required
                  />
              </div>
            </div>
            <UiButton type="submit" class="w-full">Guardar</UiButton>
          </form>
        </div>
        <div>09</div>
      </div>
    </UiCard>
  </div>
</template>
<script setup lang="ts">
const newMovie = ref<Movie>({
  name: 'Concursante',
  imdb: '0447907',
  year: 2007,
  description: 'Una comedia negra narra el destino del mayor premio de concursos de la historia.',
  sinopsis: 'Martin Circo Martin, un hombre de mediana edad, es el afortunado ganador de un concurso de televisión. El premio es un millón de euros. Pero el premio no es en metálico, sino en un cheque que no puede cobrar hasta dentro de un año. Martin, que está en paro, no puede esperar tanto tiempo. Así que decide ir a la televisión para pedir que le adelanten el dinero. Pero la televisión no puede hacer nada. Martin se ve obligado a esperar. Y a medida que pasa el tiempo, su vida se va complicando cada vez más. Su mujer le abandona, su hijo se va de casa, su madre se muere, su hermano le estafa, su casa se incendia, su perro se escapa, su coche es robado, su padre le odia, su trabajo es un infierno, su banco le arruina, su salud se resiente, su vida se convierte en un infierno. Y todo por culpa de un cheque que no puede cobrar.',
  trailer: 'GwfQenN26w4',
  country: 'España',
  language: 'Español',
  genders: 'Comedia, Drama',
  duration: 84,
  tags: 'humor, español, comedia negra, dinero,economía, televisión, concurso',
  active: true
})
const storeMovie = async () => {
  await useFetch<Movie>('/api/movies', {
    method: 'POST',
    body: JSON.stringify(newMovie.value)
  }).then((data) => {
    console.log(data);
  })

}
</script>