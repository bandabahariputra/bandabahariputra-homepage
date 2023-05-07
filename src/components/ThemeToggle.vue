<script setup>
defineProps({
  light: {
    type: Boolean,
    required: false,
    default: false,
  },
});

defineEmits(['click']);
</script>

<template>
  <div>
    <button
      class="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md border"
      :class="{
        'border-purple-500 bg-purple-500 hover:border-purple-600 hover:bg-purple-600':
          light,
        'border-orange-300 bg-orange-300 hover:border-orange-400 hover:bg-orange-400':
          !light,
      }"
      @click="$emit('click')"
    >
      <Transition name="toggle">
        <svg
          v-if="light"
          viewBox="0 0 24 24"
          focusable="false"
          class="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-100"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
          ></path>
        </svg>
      </Transition>
      <Transition name="toggle">
        <svg
          v-if="!light"
          viewBox="0 0 24 24"
          focusable="false"
          class="absolute top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-900"
          aria-hidden="true"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2"></path>
            <path d="M12 21v2"></path>
            <path d="M4.22 4.22l1.42 1.42"></path>
            <path d="M18.36 18.36l1.42 1.42"></path>
            <path d="M1 12h2"></path>
            <path d="M21 12h2"></path>
            <path d="M4.22 19.78l1.42-1.42"></path>
            <path d="M18.36 5.64l1.42-1.42"></path>
          </g>
        </svg>
      </Transition>
    </button>
  </div>
</template>

<style scoped>
.toggle-enter-active,
.toggle-leave-active {
  transition: all 0.5s;
}

.toggle-enter-from {
  top: -100%;
}

.toggle-leave-to {
  top: 200%;
}
</style>
