<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      count: 0
    }
  }
});
</script>

<template>
  <PButton
    @click="count++"
  >
    Click
  </PButton>
  <div>Click count: {{ count }}</div>
</template>

<style scoped>

</style>
