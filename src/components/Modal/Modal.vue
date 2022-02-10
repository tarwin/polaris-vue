<template lang="pug">
div
  slot(name="activator")
  Portal(idPrefix="modal")
    transition-group(:appear="!instant", :enter="!instant", :exit="!instant")
      Dialog(
        :instant="instant",
        :labelledBy="labelledBy",
        :large="large",
        :small="small",
        :limitHeight="limitHeight",
        @close="$emit('close')",
        @entered="$emit('entered')",
        @exited="$emit('exited')",
      )
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { classNames } from 'polaris-react/src/utilities/css';
import styles from '@/classes/Modal.json';
import { ComplexAction } from '@/interface';
import { Portal } from '../Portal';
import { Dialog } from './components/Dialog';

@Component({
  components: {
    Portal,
    Dialog,
  },
})
export default class Modal extends Vue {
  /**
   * Whether the modal is open or not
   */
  @Prop({ type: Boolean })
  public open!: boolean;

  /**
   * The url that will be loaded as the content of the modal
   */
  @Prop({ type: String })
  public src?: string;

  /**
   * The name of the modal content iframe
   */
  @Prop({ type: String })
  public iFrameName?: string;

  /**
   * Hide the title in the modal
   */
  @Prop({ type: Boolean, default: false })
  public titleHidden!: boolean;

  /**
   * Disable animations and open modal instantly
   */
  @Prop({ type: Boolean })
  public instant?: boolean;

  /**
   * Automatically adds sections to modal
   */
  @Prop({ type: Boolean })
  public sectioned?: boolean;

  /**
   * Increases the modal width
   */
  @Prop({ type: Boolean })
  public large?: boolean;

  /**
   * Decreases the modal width
   */
  @Prop({ type: Boolean })
  public small?: boolean;

  /**
   * Limits modal height on large sceens with scrolling
   */
  @Prop({ type: Boolean })
  public limitHeight?: boolean;

  /**
   * Replaces modal content with a spinner while a background action is being performed
   */
  @Prop({ type: Boolean })
  public loading?: boolean;

  /**
   * Removes Scrollable container from the modal content
   */
  @Prop({ type: Boolean })
  public noScroll?: boolean;

  /**
   * Primary action
   */
  @Prop()
  public primaryAction?: ComplexAction;

  /**
   * Collection of secondary actions
   */
  @Prop()
  public secondaryActions?: ComplexAction[];
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/Modal.scss';
</style>
