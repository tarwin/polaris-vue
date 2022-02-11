<template lang="pug">
div(
  v-if="instant",
  :class="containerClass",
  data-polaris-layer,
  data-polaris-overlay,
  ref='dialog',
)
  TrapFocus
    div(
      role="dialog",
      aria-modal,
      :aria-labelledby="labelledBy",
      tabindex="-1",
      :class="dialogClass",
    )
      div(:class="classes")
        KeypressListener(:keyCode="escapeKey", :handler="() => $emit('close')")
        slot
div(
  v-else,
  :class="containerClass",
  data-polaris-layer,
  data-polaris-overlay,
  ref='dialog',
)
  TrapFocus
    div(
      role="dialog",
      aria-modal,
      :aria-labelledby="labelledBy",
      tabindex="-1",
      :class="dialogClass"
    )
      div(:class="classes")
        KeypressListener(:keyCode="escapeKey", :handler="() => $emit('close')")
        slot
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Ref } from 'vue-property-decorator';
import { classNames } from 'polaris-react/src/utilities/css';
import styles from '@/classes/Modal-Dialog.json';
import { focusFirstFocusableNode } from '@/utilities/focus';
import { KeypressListener, Key } from '@/components/KeypressListener';
import { TrapFocus } from '@/components/TrapFocus';

@Component({
  components: {
    KeypressListener,
    TrapFocus,
  },
})
export default class Dialog extends Vue {
  @Prop({ type: String }) public labelledBy?: string;

  @Prop({ type: Boolean }) public instant?: boolean;

  @Prop({ type: Boolean }) public limitHeight?: boolean;

  @Prop({ type: Boolean }) public large?: boolean;

  @Prop({ type: Boolean }) public small?: boolean;

  @Prop({ type: Boolean }) public inProps?: boolean;

  @Ref('dialog') containerNode!: HTMLElement;

  public containerClass = styles.Container;

  public dialogClass = styles.Dialog;

  public escapeKey = Key.Escape;

  get classes() {
    return classNames(
      styles.Modal,
      this.small && styles.sizeSmall,
      this.large && styles.sizeLarge,
      this.limitHeight && styles.limitHeight,
    );
  }

  mounted() {
    if (this.containerNode && this.containerNode.contains(document.activeElement)) {
      focusFirstFocusableNode(this.containerNode);
    }

    this.$emit('entered');
  }

  beforeDestroy() {
    this.$emit('exited');
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/Dialog/Dialog.scss';
</style>
