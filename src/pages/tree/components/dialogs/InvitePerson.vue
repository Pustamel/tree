<script
  setup
  lang="ts"
>
import {ref} from "vue";
import {kinships} from '@/pages/tree/utils/consts.js'

const emit = defineEmits(['update:inviteDialog'])
defineProps(['inviteDialog'])
const role = ref('')

</script>

<template>
  <q-dialog
    @update:model-value="emit('update:inviteDialog', !inviteDialog)"
    :model-value="inviteDialog"
  >
    <q-card
      flat
      style="max-width: 1500px"
      class="q-pb-lg q-pl-md q-pr-md q-pt-xs"
    >
      <div class="q-pa-md row items-center justify-between">
        <q-card-section>
          <div class="text-h6">{{ $t('family.invite') }}</div>
        </q-card-section>
        <q-btn
          size="20"
          flat
          @click="emit('update:inviteDialog', false)"
          icon="close"
        />
      </div>

      <q-card-section class="invite-person__body q-pt-none">
        <q-input
          :label="$t('user.username')"
          outlined
         model-value=""/>
        <q-input
          class="q-mt-md"
          :label="$t('user.email')"
          outlined
         model-value=""/>
        <q-select
          :model-value="role"
          :options="kinships"
          option-value="title"
          option-label="label"
          outlined
          :label="$t('user.role')"
          class="q-mt-md"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          flat
          color="blue-5"
          :label="$t('base.done')"
        ></q-btn>
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>

<style
  scoped
  lang="scss"
>

</style>