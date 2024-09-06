<script setup lang="ts">

const props = defineProps({
  modelDate: String,
  label: String
})

const emit = defineEmits(['change'])

</script>

<template>
  <q-input
    outlined
    :label="label"
    :model-value="modelDate"
    @update:model-value="emit('change', $event)"
  >
    <template v-slot:append>
      <q-icon
        name="event"
        class="cursor-pointer"
      >
        <q-popup-proxy
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            mask="YYYY-MM-DD"
            @update:model-value="emit('change', $event)"
            :model-value="modelDate"
          >
            <div class="row items-center justify-end">
              <q-btn
                v-close-popup
                :label="$t('base.close')"
                color="primary"
                flat
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>