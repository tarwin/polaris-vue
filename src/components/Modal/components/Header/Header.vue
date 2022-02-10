<template lang="pug">
div(:class="className")
  div(
    :id="id",
    :class="titleClass",
  )
    DisplayText(element="h2", size="small")
      slot
  CloseButton(@click="$emit('close')")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { DisplayText } from '@/components/DisplayText';
import styles from '@/classes/Modal-Header.json';
import { CloseButton } from '../CloseButton';

@Component({
  components: {
    DisplayText,
    CloseButton,
  },
})
export default class Header extends Vue {
  @Prop({ type: String }) public id?: string;

  @Prop({ type: Boolean }) public titleHidden?: boolean;

  public titleClass = styles.Title;

  get className() {
    return this.titleHidden || !this.$slots.default
      ? styles.titleHidden
      : styles.Header;
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/Header/Header.scss';
</style>
