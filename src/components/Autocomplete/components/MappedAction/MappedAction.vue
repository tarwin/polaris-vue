<template lang="pug">
  div(:class="actionContainerClassName")
    ListboxAction(
      :selected="active",
      :disabled="disabled",
      :value="content || ''",
    )
      <!-- Prefix markup -->
      div(:class="actionClassNames")
        div(:class="contentClassName")
          div(v-if="$slots.prefix" :class="prefixClassName")
            slot(name="prefix")
          div(v-else-if="icon" :class="prefixClassName")
            Icon(:source="icon")
          div(
            v-else,
            role="presentation",
            :class="prefixClassName",
            :style="{ backgroundImage: `url(${image}` }",
          )

      <!-- Content markup -->
      div(:class="textClassName")
        div(:class="contentOverFlowStyle") {{ content }}
        TextStyle(v-if="helpText", variation="subdued") {{ helpText }}

      <!-- Badge markup -->
      span(v-if="Object.keys(badge).length", :class="suffixClassName")
        Badge(:status="badge.status") {{ badge.content }}

      <!-- Suffix markup -->
      span(:class="suffixClassName") {{ suffix }}
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Provide } from 'vue-property-decorator';
import type { IconSource } from 'types/type';
import { classNames } from 'polaris-react/src/utilities/css';
import styles from '@/classes/Autocomplete-MappedAction.json';
import { Badge } from '../../../Badge';
import { Listbox, ListboxAction } from '../../../Listbox';
import { Icon } from '../../../Icon';
import { TextStyle } from '../../../TextStyle';

@Component({
  components: {
    Badge,
    Listbox,
    Icon,
    TextStyle,
    ListboxAction,
  },
})
export default class MappedActionContext extends Vue {
  @Provide() mappedActionContext = {
    role: this.role,
    url: this.url,
    external: this.external,
    onAction: this.onAction,
    destructive: this.destructive,
  }

  @Prop({ type: String })
  public id?: string;

  @Prop({ type: String })
  public content?: string;

  @Prop({ type: Boolean })
  public external?: boolean;

  @Prop({ type: Boolean })
  public destructive?: boolean;

  @Prop({ type: String })
  public url?: string;

  @Prop({ type: Object })
  public badge?: {
    status: 'new';
    content: string;
  }

  @Prop({ type: Boolean })
  public disabled?: boolean;

  @Prop({ type: [String, Object, Function] })
  public icon?: IconSource;

  @Prop({ type: String })
  public image?: string

  @Prop({ type: Boolean })
  public active?: boolean;

  @Prop({ type: Boolean })
  public ellipsis?: boolean;

  @Prop({ type: String })
  public role?: string;

  @Prop({ type: String })
  public helpText?: string

  @Prop({ type: String, default: false })
  public wrapOverflow?: boolean;

  public actionContainerClassName = styles.ActionContainer;

  public contentClassName = styles.Content;

  public prefixClassName = styles.Prefix;

  public suffixClassName = styles.Suffix;

  public textClassName = styles.Text;

  get contentOverflowStyle() {
    return this.wrapOverflow ? styles.ContentWrap : undefined;
  }

  get actionClassNames(): string {
    return classNames(
      styles.Action,
      this.disabled && styles.disabled,
      this.destructive && styles.destructive,
      this.active && styles.selected,
    );
  }

  public onAction() {
    this.$emit('action');
  }
}
</script>

<style lang="scss">
@import 'polaris-react/src/components/Autocomplete/components/MappedAction/MappedAction.scss';
</style>
