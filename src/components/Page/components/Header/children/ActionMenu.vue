<template lang="pug">
slot(v-if="hasSlot(slots.default)")
ActionMenu(
  v-else-if="(secondaryActions && secondaryActions.length > 0) || hasGroupsWithActions(actionGroups)",
  :actions="secondaryActions",
  :groups="actionGroups",
  :rollup="isNavigationCollapsed",
  :rollupActionsLabel="title ? `View actions for ${title}` : undefined",
  @action-rollup="onActionRollup",
)
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { ActionMenu } from '@/components/ActionMenu';
import type { MenuActionDescriptor } from '@/utilities/interface';
import type { ActionMenuProps } from '@/components/ActionMenu/utils';
import type { MenuGroupDescriptor } from '@/components/ActionMenu/components/MenuGroup/utils';
import { UseMediaQuery } from '@/utilities/media-query';
import { hasSlot } from '@/utilities/has-slot';

const props = defineProps<{
  title?: string;
  secondaryActions?: MenuActionDescriptor[];
  actionGroups?: MenuGroupDescriptor[];
}>();

const emits = defineEmits<{
  /** Callback that returns true when secondary actions are rolled up into action groups, and false when not */
  (e: 'action-rollup', hasRolledUp: boolean): void;
}>();

const slots = useSlots();

const { useMediaQuery } = UseMediaQuery();
const { isNavigationCollapsed } = useMediaQuery();

const onActionRollup = (hasRolledUp: boolean) => {
  emits('action-rollup', hasRolledUp);
};

function hasGroupsWithActions(groups: ActionMenuProps['groups'] = []) {
  return groups.length === 0
    ? false
    : groups.some((group) => group.actions.length > 0);
}
</script>
