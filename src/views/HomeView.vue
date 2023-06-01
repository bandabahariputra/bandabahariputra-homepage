<script setup>
import { ref } from 'vue';
import StackCard from '@/components/StackCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { useProjects } from '../composables/useProjects';
import JavascriptIcon from '@/assets/images/javascript.png';
import VueIcon from '@/assets/images/vue.png';
import NuxtIcon from '@/assets/images/nuxt.png';
import NodeIcon from '@/assets/images/node.png';

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

const { projects } = useProjects();
</script>

<template>
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
        Hello, I'm a software engineer with a focus on creating immersive web
        experiences. With a deep understanding of web development, I have the
        ability to transform ideas into visually striking and highly functional
        websites. I am passionate about optimizing user experiences, ensuring
        that every website I work on is responsive, fast, and intuitive.
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
    <div class="flex flex-wrap items-start justify-center gap-4">
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
        class="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-300 transition-all hover:bg-zinc-800 dark:bg-zinc-200 dark:text-neutral-700 dark:hover:bg-zinc-300"
      >
        <i class="ph-bold ph-github-logo"></i>
        bandabahariputra
      </a>
      <a
        href="https://www.linkedin.com/in/banda-bahari-putra-40b311199"
        target="_blank"
        class="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-300 transition-all hover:bg-zinc-800 dark:bg-zinc-200 dark:text-neutral-700 dark:hover:bg-zinc-300"
      >
        <i class="ph-bold ph-linkedin-logo"></i>
        bandabahariputra
      </a>
      <a
        href="https://www.instagram.com/bandabahariputra"
        target="_blank"
        class="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-300 transition-all hover:bg-zinc-800 dark:bg-zinc-200 dark:text-neutral-700 dark:hover:bg-zinc-300"
      >
        <i class="ph-bold ph-instagram-logo"></i>
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
