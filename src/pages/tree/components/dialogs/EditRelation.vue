<script
  setup
  lang="ts"
>
import MenuBtn from "@/shared/UI/MenuBtn.vue";
import {useI18n} from "vue-i18n";

const {t: localization} = useI18n()

const columns: any[] = [
  {
    name: 'person',
    label: 'Персона',
    field: (row: { person: string, relation: string }) => row.person,
    align: 'center'
  },
  {
    name: 'relation',
    label: 'Связь',
    field: (row: { person: string, relation: string }) => row.relation,
    align: 'center'
  },
  {
    name: 'action',
    label: '-',
    field: '',
    align: 'center'
  }
]

const rows: { person: string, relation: string }[] = [
  {
    person: 'Frozen Yogurt',
    relation: 'Папа'
  },
]

const emit = defineEmits(['update:editRelation'])
const props = defineProps({editRelation: Boolean})


const actionsPerson: { id: unknown, title: string, icon: string }[] = [
  {id: 1, title: localization('family.deleteRelation'), icon: 'mdi-link-variant-remove'},
  {id: 1, title: localization('family.deletePerson'), icon: 'mdi-account-off'}
]

</script>

<template>
  <q-dialog
    @update:model-value="emit('update:editRelation', !editRelation)"
    :model-value="editRelation"
  >
    <q-card
      flat
      style="max-width: 1500px"
      class="q-pb-lg q-pl-md q-pr-md q-pt-xs"
    >
      <div class="q-pa-md row items-center justify-between">
        <q-card-section>
          <div class="text-h6">{{ $t('family.editRelation') }}</div>
        </q-card-section>
        <q-btn
          size="20"
          flat
          @click="emit('update:editRelation', false)"
          icon="close"
        />
      </div>

      <q-card-section class="edit-relation__body">
        <q-table
          class="edit-relation__body-table"
          flat
          bordered
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template #header-cell-action>
            <th>
              <q-btn
                flat
                size="10px"
                icon="add"
                color="blue-7 bg-blue-1"
              >
                {{ $t('family.newRelation') }}
              </q-btn>
            </th>
          </template>
          <template #body-cell-action>
            <td class="text-center">
              <MenuBtn :items="actionsPerson"/>
            </td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          :label="$t('base.cancel')"
          color="grey-7"
          v-close-popup
        />
        <q-btn
          flat
          :label="$t('base.save')"
          class="bg-blue-5 text-white"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>

<style
  scoped
  lang="scss"
>
  .edit-relation__body-table {
    width: 700px;
    @media screen and (max-width: 800px) {
      width: 500px;
    }
    @media screen and (max-width: 600px) {
      width: auto
    }
  }
</style>