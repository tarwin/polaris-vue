<template lang="pug">
div(
  :id="id",
  :style="collapsibleStyles",
  ref="collapsibleContainerRef",
  :class="wrapperClassName",
  @transitionend="handleCompleteAnimation",
  :aria-hidden="!open",
)
  template(v-if="expandOnPrint || !isFullyClosed")
    slot
</template>

<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import { classNames } from 'polaris/polaris-react/src/utilities/css';
import styles from '@/classes/Collapsible.json';
import type { TransitionCollapsible } from './utils';

interface CollapsibleProps {
  /** Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component’s aria-controls prop. */
  id: string;
  /** Option to show collapsible content when printing */
  expandOnPrint?: boolean;
  /** Toggle whether the collapsible is expanded or not. */
  open: boolean;
  /** Prevents component from re-measuring when child is updated **/
  preventMeasuringOnChildrenUpdate?: boolean;
  /** Assign transition properties to the collapsible */
  transition?: TransitionCollapsible;
}

type AnimationState = 'idle' | 'measuring' | 'animating';

const props = defineProps<CollapsibleProps>();

const height = ref(0);
const animationState = ref<AnimationState>('idle');
const collapsibleContainerRef = ref<HTMLDivElement | null>(null);

const isOpen = ref(props.open);

const isFullyOpen = computed(() => {
  return animationState.value === 'idle' && props.open && isOpen.value;
});

const isFullyClosed = computed(() => {
  return animationState.value === 'idle' && !props.open && !isOpen.value;
});

const wrapperClassName = computed(() => {
  return classNames(
    styles.Collapsible,
    isFullyClosed.value && styles.isFullyClosed,
    props.expandOnPrint && styles.expandOnPrint,
  );
});

const collapsibleStyles = computed(() => {
  return {
    ...(props.transition && {
      transitionDuration: `${props.transition.duration}`,
      transitionTimingFunction: `${props.transition.timingFunction}`,
    }),
    ...{
      maxHeight: isFullyOpen.value ? 'none' : `${height.value}px`,
      overflow: isFullyOpen.value ? 'visible' : 'hidden',
    },
  };
});

const handleCompleteAnimation = ({ target }) => {
  if (target === collapsibleContainerRef.value) {
    animationState.value = 'idle';
    isOpen.value = props.open;
  }
};

watch(
  () => [props.open, isOpen.value],
  () => {
    if (props.open !== isOpen.value) {
      animationState.value = 'measuring';
      return;
    }

    if (!isFullyClosed.value && !props.preventMeasuringOnChildrenUpdate) {
      animationState.value = 'measuring';
    }
  },
);

onUpdated(() => {
  if (!collapsibleContainerRef.value) {
    return;
  }

  switch (animationState.value) {
  case 'idle':
    break;
  case 'measuring':
    height.value = collapsibleContainerRef.value.scrollHeight;
    animationState.value = 'animating';
    break;
  case 'animating':
    height.value = props.open ? collapsibleContainerRef.value.scrollHeight : 0;
  }
});

onMounted(() => {
  if (!open || !collapsibleContainerRef.value) {
    return;
  }
  // If collapsible defaults to open, set an initial height
  height.value = collapsibleContainerRef.value.scrollHeight;
});
</script>

<style lang="scss">
@import 'polaris/polaris-react/src/components/Collapsible/Collapsible.scss';
</style>
