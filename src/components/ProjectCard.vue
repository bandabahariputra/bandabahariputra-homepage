<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div
      class="mx-auto mb-4 h-[192px] w-[320px] overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-700 transition-all dark:border-neutral-200 dark:bg-neutral-200"
    >
      <img
        :src="`/projects/${project.image}`"
        :alt="project.name"
        class="h-full w-full object-cover object-top"
      />
    </div>
    <div class="text-center">
      <h4 class="mb-2 font-medium">{{ project.name }}</h4>
      <p class="text-sm text-neutral-300 transition-all dark:text-zinc-700">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
