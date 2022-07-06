<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-btn @click="onClick">click me to notify </q-btn>
    <q-badge color="grey" class="sample-component">I have big red text</q-badge>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

const $q = useQuasar();

function onClick() {
  $q.notify('Hello!');
}
</script>

<style lang="scss">
.sample-component {
  font-size: 2em;
}
</style>
