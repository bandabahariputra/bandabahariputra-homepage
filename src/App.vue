<script setup>
import { computed, ref } from 'vue';
import { RouterView } from 'vue-router';
import ThemeToggle from '@/components/ThemeToggle.vue';

const light = ref(false);
const showMenu = ref(false);

const isMobile = computed(() => {
  return screen.width < 768;
});

const handleClickMenu = () => {
  if (isMobile.value) {
    showMenu.value = !showMenu.value;
  }
};

const handleChangeTheme = () => {
  const body = document.querySelector('body');

  body.classList.toggle('dark');
  light.value = body.classList.contains('dark');
};
</script>

<template>
  <div
    class="min-h-screen bg-zinc-900 text-neutral-100 transition-all dark:bg-neutral-100 dark:text-zinc-900"
  >
    <div class="mx-auto max-w-[896px] px-4">
      <!-- navbar -->
      <nav
        class="sticky top-0 flex items-center justify-between bg-zinc-900 py-2 transition-all dark:bg-neutral-100 md:py-4"
      >
        <RouterLink to="/">
          <h1 class="text-xl font-bold">Banda Bahari Putra</h1>
        </RouterLink>
        <ThemeToggle :light="light" @click="handleChangeTheme" />
        <!-- <Menu v-if="isMobile" @click="handleClickMenu"></Menu>
        <Transition name="fade">
          <div
            v-if="!isMobile || showMenu"
            class="absolute top-full right-0 flex flex-col rounded-lg border border-neutral-600 bg-zinc-800 py-2 md:relative md:block md:border-none md:bg-transparent"
          >
            <RouterLink
              to="/"
              class="w-56 px-6 py-2 text-sm font-medium hover:bg-zinc-700 md:w-auto md:hover:bg-transparent"
            >
              Menu 1
            </RouterLink>
            <RouterLink
              to="/"
              class="w-56 px-6 py-2 text-sm font-medium hover:bg-zinc-700 md:w-auto md:hover:bg-transparent"
            >
              Menu 2
            </RouterLink>
            <RouterLink
              to="/"
              class="w-56 px-6 py-2 text-sm font-medium hover:bg-zinc-700 md:w-auto md:hover:bg-transparent"
            >
              Menu 3
            </RouterLink>
          </div>
        </Transition> -->
      </nav>

      <RouterView />
    </div>
  </div>
</template>
