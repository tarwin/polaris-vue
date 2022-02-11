<template lang="pug">
div
  div(v-if="$slots.activator", ref="activator")
    slot(name="activator")
  Portal(v-if="hasActivator && open", idPrefix="modal")
    Dialog(
      :instant="instant",
      :labelledBy="headerId",
      :large="large",
      :small="small",
      :limitHeight="limitHeight",
      @close="$emit('close')",
      @entered="handleEntered",
      @exited="handleExited",
    )
      Header(
        :titleHidden="titleHidden",
        :id="headerId",
        @close="$emit('close')",
        key="header",
      )
        slot(name="title")
      div(:class="bodyWrapperClass", key="body")
        iframe(
          v-if="src",
          :name="iFrameName",
          title="body markup",
          :src="src",
          :class="iframeClass",
          @load="handleIframeLoad",
          :style="{ height: `${iframeHeight}px` }",
        )
        div(
          v-else-if="noScroll",
          :class="bodyClass",
        )
          div(
            v-if="loading",
            :class="spinnerClass",
          )
            Spinner
          template(v-else)
            Section(v-if="sectioned")
              slot(name="content")
            slot(v-else, name="content")
        Scrollable(
          v-else,
          :shadow="true",
          :class="bodyClass",
          @scroll-to-bottom="$emit('scroll-to-bottom')",
        )
          div(
            v-if="loading",
            :class="spinnerClass",
          )
            Spinner
          template(v-else)
            Section(v-if="sectioned")
              slot(name="content")
            slot(v-else, name="content")
      Footer(
        v-if="$slots.footer || primaryAction || secondaryActions",
        :primaryAction="primaryAction",
        :secondaryActions="secondaryActions",
        key="footer",
      )
        slot(name="footer")
    Backdrop
</template>

<script lang="ts">
import {
  Component, Mixins, Prop, Ref,
} from 'vue-property-decorator';
import { durationBase } from '@shopify/polaris-tokens';
import { ComplexAction } from '@/interface';
import { UseUniqueId } from '@/mixins';
import { focusFirstFocusableNode } from '@/utilities/focus';
import styles from '@/classes/Modal.json';
import {
  Dialog, Header, Section, Footer,
} from './components';
import { Portal } from '../Portal';
import { Spinner } from '../Spinner';
import { Backdrop } from '../Backdrop';
import { Scrollable } from '../Scrollable';

const IFRAME_LOADING_HEIGHT = 200;
const DEFAULT_IFRAME_CONTENT_HEIGHT = 400;

@Component({
  components: {
    Portal,
    Dialog,
    Header,
    Section,
    Footer,
    Spinner,
    Backdrop,
    Scrollable,
  },
})
export default class Modal extends Mixins(UseUniqueId) {
  @Ref('activator') activatorNode!: HTMLElement;

  /**
   * Whether the modal is open or not
   */
  @Prop({ type: Boolean, required: true })
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

  public headerId = this.useUniqueId('modal-header');

  public bodyWrapperClass = styles.BodyWrapper;

  public iframeClass = styles.IFrame;

  public bodyClass = styles.Body;

  public spinnerClass = styles.Spinner;

  public iframeHeight = IFRAME_LOADING_HEIGHT;

  public hasActivator = false;

  public duration = durationBase;

  public handleIFrameLoad(evt: Event) {
    const iframe = evt.target as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      try {
        this.iframeHeight = iframe.contentWindow.document.body.scrollHeight;
      } catch (_error) {
        this.iframeHeight = DEFAULT_IFRAME_CONTENT_HEIGHT;
      }
    }

    this.$emit('iframe-load', evt);
  }

  public handleEntered() {
    this.$emit('transition-end');
  }

  public handleExited() {
    this.iframeHeight = IFRAME_LOADING_HEIGHT;
    if (this.activatorNode) {
      requestAnimationFrame(() => focusFirstFocusableNode(this.activatorNode));
    }
  }

  mounted() {
    if (this.activatorNode) this.hasActivator = true;
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/Modal.scss';
</style>
