<template lang="pug">
div(:class="className")
  div(v-if="$slots.label || label", :class="styles.LabelWrapper")
    Label(
      :id="id",
      :requiredIndicator="requiredIndicator",
      :hidden="false",
      v-bind="$attrs",
    )
      slot(name="label" v-if="$slots.label")
      template(v-else-if="label")
        | {{ label }}
    div(
      v-if="action",
      :class="styles.Action"
    )
      ButtonFrom(
        :action="action",
        :overrides="{ plain: true }",
      )
  slot
  div(
    v-if="isError",
    :class="styles.Error",
  )
    InlineError(
      v-if="typeof error === 'string'",
      :message="error",
      :fieldID="errorID(id)",
    )
    component(
      v-else,
      :is="error",
    )
  div(
    v-if="$slots['help-text'] || helpText",
    :class="styles.HelpText",
    :id="helpTextID(id)",
  )
    slot(name="help-text" v-if="$slots['help-text']")
    template(v-else-if="helpText")
      | {{ helpText }}
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { classNames } from 'polaris/polaris-react/src/utilities/css';
import styles from '@/classes/Labelled.json';
import type { Action, Error } from '@/utilities/type';
import { ButtonFrom } from '@/components';
import type { LabelProps } from '../Label/utils';
import { Label } from '../Label';
import { InlineError } from '../InlineError';
import { helpTextID, errorID } from './utils';

interface LabelledProps {
  /** A unique identifier for the label */
  id: LabelProps['id'];
  /** Error to display beneath the label */
  error?: Error;
  /** An action */
  action?: Action;
  /** Label: overriden by #label slot  */
  label?: string;
  /** Visually hide the label */
  labelHidden?: boolean;
  /** Visual required indicator for the label */
  requiredIndicator?: boolean;
  /** Help Text: Overriden by #helpText slot */
  helpText?: string;
}

const props = defineProps<LabelledProps>();

const isError = computed(() => props.error && typeof props.error !== 'boolean');

const className = computed(() => classNames(props.labelHidden && styles.hidden));
</script>

<style lang="scss">
@import 'polaris/polaris-react/src/components/Labelled/Labelled.scss';
</style>
