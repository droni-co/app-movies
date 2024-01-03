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
        <div v-if="status === 'authenticated'">
          <NuxtLink to="/users/kalvinmanson" title="Mi perfil" class="inline-block">
            <img :src="data?.user?.image ?? ''" :alt="data?.user?.name ?? ''" class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" />
          </NuxtLink>
        </div>
        <button v-if="status !== 'authenticated'" class="text-4xl text-white" @click="signIn('google')">
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
const { status, data, signIn } = useAuth()
</script>
<style scoped>
  .radialBg {
    background: rgb(71,85,105);
    background: radial-gradient(circle, rgba(71,85,105,1) 0%, rgba(30,41,59,1) 100%);
  }
</style>