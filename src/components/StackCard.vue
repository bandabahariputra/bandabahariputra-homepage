<script setup>
defineProps({
  techStack: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid h-[112px] w-[128px] place-items-center rounded-xl bg-zinc-700 transition-all dark:bg-neutral-200"
  >
    <div class="flex flex-col items-center space-y-3">
      <div class="grid h-[40px] w-[40px] place-items-center">
        <img :src="techStack.image" :alt="techStack.text" />
      </div>
      <p class="text-sm font-medium">{{ techStack.text }}</p>
    </div>
  </div>
</template>
