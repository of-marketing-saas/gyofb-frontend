<!-- eslint-disable vue/valid-v-slot -->
<template>
  <collection-table title="Collection Dashboard" :collections="collections"></collection-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CollectionTable from '@/components/dashboards/CollectionTable.vue';
import { useUserStore } from '@/stores/user';
import type { Collection } from '@/API';

const { user } = useUserStore();

const collections = computed(() => (user?.collections?.items || []) as Collection[]);
</script>
