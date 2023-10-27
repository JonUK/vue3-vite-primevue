<template>
  <p>Your name is: {{ name }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component
export default class VueFacingDecorator extends Vue {
  @Prop() name!: string;
}

</script>
