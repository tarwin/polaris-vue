<template lang="pug">
button(
  :class="className",
  aria-label="Close",
  @click="$emit('click')",
)
  Icon(:source="iconSource", color="base")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MobileCancelMajor from '@icons/MobileCancelMajor.svg';
import { Icon } from '@/components/Icon';
import styles from '@/classes/Modal-CloseButton.json';

@Component({
  components: {
    Icon,
  },
})
export default class CloseButton extends Vue {
  public className = styles.CloseButton;

  public iconSource = MobileCancelMajor;
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/CloseButton/CloseButton.scss';
</style>
