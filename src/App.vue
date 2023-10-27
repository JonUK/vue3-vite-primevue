<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
  components: {
    PButton: Button
  },
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
