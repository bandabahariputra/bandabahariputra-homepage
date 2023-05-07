<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Button from '@/components/Button.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import StackCard from '@/components/StackCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import JavascriptIcon from '@/assets/images/javascript.png';
import VueIcon from '@/assets/images/vue.png';
import NuxtIcon from '@/assets/images/nuxt.png';
import NodeIcon from '@/assets/images/node.png';

const light = ref(false);
const showMenu = ref(false);

const stacks = ref([
  {
    image: JavascriptIcon,
    text: 'Javascript',
  },
  {
    image: VueIcon,
    text: 'Vue',
  },
  {
    image: NuxtIcon,
    text: 'Nuxt',
  },
  {
    image: NodeIcon,
    text: 'Node',
  },
]);

const projects = ref([
  {
    image: 'balai_wilayah_sungai_kalimantan_3.png',
    name: 'Balai Wilayah Sungai Kalimantan III',
    description:
      'A website for display information from Balai Wilayah Sungai Kalimantan III',
  },
]);

const isMobile = computed(() => {
  return screen.width < 768;
});

const handleChangeTheme = () => {
  const body = document.querySelector('body');

  body.classList.toggle('dark');

  light.value = body.classList.contains('dark');
};

const handleClickMenu = () => {
  if (isMobile.value) {
    showMenu.value = !showMenu.value;
  }
};
</script>

<template>
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

  <!-- greetings -->
  <div class="py-8">
    <div
      class="font-mediium mx-auto max-w-[576px] rounded-lg bg-zinc-700 py-2 text-center transition-all dark:bg-neutral-200"
    >
      <h2>I am a software engineer</h2>
    </div>
  </div>

  <!-- about -->
  <section class="mx-auto max-w-[672px] py-10">
    <div class="mb-8">
      <h3 class="text-center text-2xl font-bold">Hello There.</h3>
    </div>
    <div class="space-y-4">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet sit amet nulla ut ullamcorper. In euismod purus a nulla viverra,
        sit amet dictum erat finibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        aliquet sit amet nulla ut ullamcorper. In euismod purus a nulla viverra,
        sit amet dictum erat finibus.
      </p>
    </div>
  </section>

  <!-- tech stack -->
  <section class="py-10">
    <div class="mb-8">
      <h3 class="text-center text-2xl font-bold">Tech Stack.</h3>
      <p class="mt-2 text-center">
        Here are a several technologies I've been working with recently.
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <StackCard
        v-for="item in stacks"
        :key="item.text"
        :tech-stack="item"
      ></StackCard>
    </div>
  </section>

  <!-- project -->
  <section class="py-10">
    <div class="mb-8">
      <h3 class="text-center text-2xl font-bold">Something I've Built.</h3>
      <p class="mt-2 text-center">These are some projects I have made.</p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      ></ProjectCard>
    </div>
  </section>

  <!-- contact -->
  <section class="py-10">
    <div class="mx-auto mb-8 max-w-[550px]">
      <h3 class="text-center text-2xl font-bold">Get in Touch.</h3>
      <p class="mt-2 text-center">
        Feel free to drop me a message if you have some interesting offer or
        just want to say hi, I'll try my best to reach you back!
      </p>
    </div>
    <div class="flex justify-center">
      <a
        href="mailto:bandabahariputra99@gmail.com"
        target="_blank"
        class="rounded-lg bg-slate-500 px-6 py-2 text-sm font-medium transition-all hover:bg-slate-600 dark:text-neutral-100"
        >Contact Me</a
      >
    </div>
  </section>

  <!-- on the web -->
  <section class="py-10">
    <div class="mx-auto mb-8 max-w-[550px]">
      <h3 class="text-center text-2xl font-bold">On the Web.</h3>
    </div>
    <div class="flex flex-col items-center justify-center gap-2 md:flex-row">
      <a
        href="https://github.com/bandabahariputra"
        target="_blank"
        class="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-300 transition-all hover:bg-zinc-800 hover:underline dark:bg-zinc-200 dark:text-neutral-700 dark:hover:bg-zinc-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
          ></path>
        </svg>
        @bandabahariputra
      </a>
      <a
        href="https://www.instagram.com/bandabahariputra"
        target="_blank"
        class="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-300 transition-all hover:bg-zinc-800 hover:underline dark:bg-zinc-200 dark:text-neutral-700 dark:hover:bg-zinc-300"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
          ></path>
          <path
            d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
          ></path>
        </svg>
        @bandabahariputra
      </a>
    </div>
  </section>

  <!-- footer -->
  <footer class="py-12">
    <p
      class="text-center text-sm text-neutral-300 transition-all dark:text-zinc-700"
    >
      &copy; 2023 Banda Bahari Putra. All Right Reserved.
    </p>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  transform-origin: right top;
  transform: scale(0);
  opacity: 0;
}
</style>
