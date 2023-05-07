<script setup>
defineEmits(['click']);
</script>

<template>
  <div>
    <button
      class="grid h-10 w-10 place-items-center rounded-md border border-neutral-500 hover:bg-zinc-800"
      @click="$emit('click')"
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        class="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
        ></path>
      </svg>
    </button>
  </div>
</template>
