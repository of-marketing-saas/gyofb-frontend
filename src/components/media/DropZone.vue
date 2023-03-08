<template>
  <div
    :class="className"
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="setActive"
    @dragleave.prevent="setInactive"
    @drop.prevent="onDrop"
  >
    <slot :dropZoneActive="active"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  className: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['files-dropped']);

// Computed props
const className = computed(() => `drop-zone ${props.className}`);

const active = ref(false);
let inActiveTimeout: ReturnType<typeof setTimeout>;
// setActive and setInactive use timeouts, so that when you drag an item over a child element,
// the dragleave event that is fired won't cause a flicker. A few ms should be plenty of
// time to wait for the next dragenter event to clear the timeout and set it back to active.
const setActive = () => {
  active.value = true;
  clearTimeout(inActiveTimeout);
};
const setInactive = () => {
  inActiveTimeout = setTimeout(() => {
    active.value = false;
  }, 50);
};
const onDrop = (e: DragEvent): any => {
  setInactive();
  emit('files-dropped', [...(e.dataTransfer?.files || [])]);
};

const preventDefaults = (e: Event): any => {
  e.preventDefault();
};
const events: string[] = ['dragenter', 'dragover', 'dragleave', 'drop'];

onMounted(() => {
  events.forEach((eventName: string) => {
    document.body.addEventListener(eventName, preventDefaults);
  });
});

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults);
  });
});
</script>
