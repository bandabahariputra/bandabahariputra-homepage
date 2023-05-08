<script setup>
import { useRoute } from 'vue-router';
import { useProjects } from '../composables/useProjects';

const route = useRoute();
const { getProject } = useProjects();

const project = getProject(route.params.slug);
</script>

<template>
  <div>
    <section class="mx-auto max-w-[672px] py-10">
      <div
        class="mx-auto mb-4 h-[192px] w-full overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-700 transition-all dark:border-neutral-200 dark:bg-neutral-200 md:h-[360px]"
      >
        <img
          :src="`/projects/${project.image}`"
          :alt="project.name"
          class="h-full w-full object-cover object-top"
        />
      </div>
      <h4 class="text-lg font-bold">{{ project.name }}</h4>
      <p class="mt-2">
        {{ project.description }}
      </p>
      <div class="mt-4 space-y-2">
        <div class="flex items-center gap-2">
          <p
            class="inline rounded-sm bg-[#9ae6b429] p-1 text-xs font-bold uppercase text-[#9AE6B4] dark:text-zinc-900"
          >
            STACK
          </p>
          <p>{{ project.stacks.join(', ') }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p
            class="inline rounded-sm bg-[#9ae6b429] p-1 text-xs font-bold uppercase text-[#9AE6B4] dark:text-zinc-900"
          >
            DEMO
          </p>
          <a
            :href="project.demo"
            target="_blank"
            class="flex items-center gap-2 text-orange-400 underline-offset-4 hover:underline dark:text-purple-600"
            >{{ project.demo.replace('https://', '') }}
            <i class="ph-bold ph-arrow-square-out"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>
