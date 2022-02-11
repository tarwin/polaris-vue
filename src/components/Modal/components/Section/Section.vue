<template lang="pug">
section(:class="className")
  slot
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { classNames } from 'polaris-react/src/utilities/css';
import styles from '@/classes/Modal-Section.json';

@Component
export default class Section extends Vue {
  @Prop({ type: Boolean, default: false }) public flush?: boolean;

  @Prop({ type: Boolean, default: false }) public subdued?: boolean;

  get className() {
    return classNames(
      styles.Section,
      this.flush && styles.flush,
      this.subdued && styles.subdued,
    );
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/Section/Section.scss';
</style>
