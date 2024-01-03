<template>
  <div class="min-h-screen">
    <header class="flex container mx-auto">
      <NuxtLink to="/" class="bg-sky-800 text-white p-3 transition hover:bg-sky-700">
        Movies
      </NuxtLink>
      <nav class="grow text-end">
        <NuxtLink to="/search" class="inline-block rounded bg-sky-800 text-white py-1 px-3 my-2 transition hover:bg-sky-700">
          Search
        </NuxtLink>
      </nav>
    </header>
    <main class="container mx-auto">
      <slot />
    </main>
  </div>
</template>