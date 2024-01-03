<template>
  <!-- drawer component -->
  <div class="min-h-screen radialBg">
    <div class="bg-gradient-to-b from-slate-800 to-transparent">
      <header class="flex py-3 container mx-auto">
        <MainMenu />
        <div class="grow text-center">
          <NuxtLink to="/" title="Droni.co Movies" class="inline-block">
            <img src="~/assets/img/logo-w.svg" alt="Droni.co Movies" class="w-10" />
          </NuxtLink>
        </div>
        <button class="text-4xl text-white">
          <i class="mdi mdi-account"></i>
        </button>
      </header>
    </div>
    <main class="container mx-auto">
      <slot />
    </main>
    <footer class="bg-gradient-to-b from-slate-800 to-slate-900 py-5">
      <div class="text-white text-center py-2">
        <p class="text-sm">
          ©2024 Colombia.<br>
          Construido con trabajo duro y mucho café por el equipo de 
          <a href="https://droni.co" target="_blank" rel="noopener" class="underline">
            Droni.co.
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
  .radialBg {
    background: rgb(71,85,105);
    background: radial-gradient(circle, rgba(71,85,105,1) 0%, rgba(30,41,59,1) 100%);
  }
</style>