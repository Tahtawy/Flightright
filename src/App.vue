<template>
  <div id="app">
    <header class="bg-blue-500 p-4">
      <div class="log text-white text-xl">
        <i class="fas fa-plane mr-2"></i>
        <span class="font-bold tracking-wide">FlightRights</span>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer
      class="bg-blue-500 p-4 text-center absolute bottom-0 w-full text-white"
    >
      FlightRights &copy; 2020
    </footer>
  </div>
</template>

<style lang="scss"></style>
