<template lang="pug">
transition(
  v-if="instant",
  :in="in",
  mountOnEnter=true,
  unmountOnExit=true,
  :timeout="duration",
  @entered="$emit('entered')",
  @exited="$emit('exited')",
)
  div(
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
          KeypressListener(:keyCode="escapeKey", :handler="$emit('close')")
          slot
transition(
  v-else,
  :in="in",
  :class="fadeUpClasses"
)
  div(
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
          KeypressListener(:keyCode="escapeKey", :handler="$emit('close')")
          slot
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Ref } from 'vue-property-decorator';
import { classNames } from 'polaris-react/src/utilities/css';
import { durationBase } from '@shopify/polaris-tokens';
import styles from '@/classes/Modal-Dialog.json';
import { KeypressListener, Key } from '@/components/KeypressListener';
import { focusFirstFocusableNode } from '@/utilities/focus';

@Component({
  components: {
    KeypressListener,
  },
})
export default class Dialog extends Vue {
  @Prop({ type: String }) public labelledBy?: string;

  @Prop({ type: Boolean }) public instant?: boolean;

  @Prop({ type: Boolean }) public limitHeight?: boolean;

  @Prop({ type: Boolean }) public large?: boolean;

  @Prop({ type: Boolean }) public small?: boolean;

  @Prop({ type: Boolean }) public in?: boolean;

  @Ref('dialog') containerNode!: HTMLElement;

  public duration = durationBase;

  public containerClass = styles.Container;

  public dialogClass = styles.Dialog;

  public escapeKey = Key.Escape;

  public fadeUpClasses = {
    appear: classNames(styles.animateFadeUp, styles.entering),
    appearActive: classNames(styles.animateFadeUp, styles.entered),
    enter: classNames(styles.animateFadeUp, styles.entering),
    enterActive: classNames(styles.animateFadeUp, styles.entered),
    exit: classNames(styles.animateFadeUp, styles.exiting),
    exitActive: classNames(styles.animateFadeUp, styles.exited),
  };

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
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/Dialog/Dialog.scss';
</style>
