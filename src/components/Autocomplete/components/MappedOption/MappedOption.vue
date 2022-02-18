<template lang="pug">
ListboxOption(
  :accessibilityLabel="isLabelContainHTMLTag ? '' : $slots.label",
  :selected="selected",
  :value="value",
  :disabled="disabled",
)
  ListboxTextOption(
    :selected="selected",
    :disabled="disabled",
  )
    div(:class="contentClassName")
      div(
        v-if="$slots.media",
        :class="mediaClassNames",
      )
        slot(name="media")
      slot(name="label")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { OptionDescriptor } from 'polaris-react/src/types';
import { classNames } from 'polaris-react/src/utilities/css';
import styles from '@/classes/Autocomplete-MappedOption.json';
import { ListboxOption, ListboxTextOption } from '../../../Listbox';

@Component({
  components: {
    ListboxOption,
    ListboxTextOption,
  },
})
export default class MappedOption extends Vue {
  @Prop({ type: String })
  public value!: OptionDescriptor['value'];

  @Prop({ type: Boolean })
  public disabled?: OptionDescriptor['disabled'];

  @Prop({ type: Boolean })
  public selected!: boolean;

  @Prop({ type: Boolean })
  public singleSelection!: boolean;

  public contentClassName = styles.Content;

  get mediaClassNames(): string {
    return classNames(
      styles.Media,
      this.disabled && styles.disabledMedia,
      this.singleSelection && styles.singleSelectionMedia,
    );
  }

  get isLabelContainHTMLTag(): boolean {
    return Boolean(
      this.$slots.label
      && this.$slots.label.length < 2
      && this.$slots.label[0]?.tag,
    );
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Autocomplete/components/MappedOption/MappedOption.scss';
</style>
