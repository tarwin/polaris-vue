<template lang="pug">
div(:class="className")
  div(:class="footerContentClass")
    Stack(alignment="center")
      StackItem(:fill="true")
        slot
      StackItem(v-if="primaryAction || secondaryActions")
        ButtonGroup
          template(
            v-if="secondaryActions",
            v-for="action, index in secondaryActions",
          )
            ButtonFrom(:action="action", :key="index")
          ButtonFrom(:action="primaryAction", :overrides="{ primary: true }")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ComplexAction } from '@/interface';
import styles from '@/classes/Modal-Footer.json';
import { Stack } from '@/components/Stack';
import { ButtonGroup } from '@/components/ButtonGroup';
import { ButtonFrom } from '@/components/Button';

@Component({
  components: {
    Stack,
    ButtonGroup,
    ButtonFrom,
  },
})
export default class Footer extends Vue {
  @Prop() public primaryAction?: ComplexAction;

  @Prop() public secondaryActions?: ComplexAction[];

  public className = styles.Footer;

  public footerContentClass = styles.FooterContent;
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Modal/components/Footer/Footer.scss';
</style>
