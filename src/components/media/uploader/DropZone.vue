<template>
  <div
    :bg-color="'red'"
    :class="className"
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="onOver"
    @dragleave.prevent="onLeave"
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

const active = ref(false);
const backgroundColorClass = ref('bg-grey-lighten-3');

// Computed props
const className = computed(() => `drop-zone ${backgroundColorClass.value} ${props.className}`);

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
  const files = [...(e.dataTransfer?.files || [])].filter((file: File) =>
    file.type.startsWith('image/'),
  );
  emit('files-dropped', files);
  backgroundColorClass.value = 'bg-grey-lighten-3';
};
const onOver = (e: DragEvent): any => {
  e.preventDefault();
  setActive();
  backgroundColorClass.value = 'bg-grey-lighten-1';
};
const onLeave = (e: DragEvent): any => {
  e.preventDefault();
  setInactive();
  backgroundColorClass.value = 'bg-grey-lighten-3';
};

const preventDefaults = (e: Event): any => e.preventDefault();
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

<style scoped>
.drop-zone {
  width: 100%;
  min-height: 200px;
  margin: 0 auto;
  padding: 30px;
  transition: 0.2s ease;
}
</style>
