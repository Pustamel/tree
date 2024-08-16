<script
  setup
  lang="ts"
>

import type {PropsMenuBtn} from "@/shared/UI/typesUI";

withDefaults(defineProps<PropsMenuBtn>(), {
  icon: 'more_vert',
  sizeBtn: '15px',
  flat: true,
  colorIcon: 'blue-4'
})

const emit = defineEmits(['select'])

</script>

<template>
  <q-btn
    :flat="flat"
    rounded
    round
    style="min-width: 0; min-height: 0"
  >
    <q-icon :color="colorIcon" :name="icon" :size="sizeBtn"> </q-icon>
    <q-menu>
      <q-list>
        <q-item
          role="button"
          clickable
          v-for="item in items"
          :key="item.id"
          @click="emit('select', item)"
        >
          <q-item-section v-if="item.icon" avatar>
            <q-icon
              :color="item.colorIcon || 'red'"
              :name="item.icon"
            />
          </q-item-section>
          <q-item-section>
            {{ item.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>