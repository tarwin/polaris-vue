<template lang="pug">
  Combobox(
    :allowMultiple="allowMultiple",
    :preferredPosition="preferredPosition",
    @scrolled-to-bottom="$emit('load-more-results')",
  )
    template(slot="activator")
      ComboboxTextField
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import type {
  ActionListItemDescriptor,
  OptionDescriptor,
  SectionDescriptor,
} from 'polaris-react/src/types';
import { isSection } from 'polaris-react/src/utilities/options';
import styles from '@/classes/Autocomplete.json';
import type { PreferredPosition } from '../PositionedOverlay';
import { Combobox, ComboboxTextField } from '../Combobox';
import { Listbox } from '../Listbox';
import { MappedAction, MappedOption } from './components';

@Component({
  components: {
    Combobox,
    Listbox,
    MappedAction,
    MappedOption,
  },
})
export default class Autocomplete extends Vue {
  /** A unique identifier for the Autocomplete */
  @Prop({ type: String })
  id?: string;

  /** Collection of options to be listed */
  @Prop({ type: Array })
  options?: SectionDescriptor[] | OptionDescriptor[];

  /** The selected options */
  @Prop({ type: Array })
  selected?: string[];

  /** The preferred direction to open the popover */
  @Prop({ type: String })
  preferredPosition?: PreferredPosition;

  /** Title of the list of options */
  @Prop({ type: String })
  listTitle?: string;

  /** Allow more than one option to be selected */
  @Prop({ type: Boolean })
  allowMultiple?: boolean;

  @Prop({ type: Object })
  /** An action to render above the list of options */
  actionBefore?: ActionListItemDescriptor & {
    /** Specifies that if the label is too long it will wrap instead of being hidden  */
    wrapOverflow?: boolean;
  };

  /** Display loading state */
  @Prop({ type: Boolean })
  loading?: boolean;

  /** Indicates if more results will load dynamically */
  @Prop({ type: Boolean })
  willLoadMoreResults?: boolean;
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Autocomplete/Autocomplete.scss';
</style>
