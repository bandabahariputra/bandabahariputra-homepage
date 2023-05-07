<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div
    class="min-h-screen bg-zinc-900 text-neutral-100 transition-all dark:bg-neutral-100 dark:text-zinc-900"
  >
    <div class="mx-auto max-w-[896px] px-4">
      <RouterView />
    </div>
  </div>
</template>
