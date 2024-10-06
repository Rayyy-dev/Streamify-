<template>
  <div class="streamify-logo" :style="{ width: `${width}px`, height: `${height}px` }">
    <svg :width="width" :height="height" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 25 Q 50 5, 90 25 T 190 25" stroke="currentColor" stroke-width="8" fill="none"/>
      <circle cx="10" cy="25" r="5" fill="currentColor"/>
      <circle cx="190" cy="25" r="5" fill="currentColor"/>
    </svg>
    <span class="logo-text">Streamify</span>
  </div>
</template>

<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 200
  },
  height: {
    type: [Number, String],
    default: 50
  }
})
</script>

<style scoped>
.streamify-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: currentColor;
}
</style>
