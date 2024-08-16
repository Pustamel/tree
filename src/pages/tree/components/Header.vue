<script
  setup
  lang="ts"
>
import {Panel} from '@vue-flow/core'
import {ref} from "vue";
import InvitePerson from "@/pages/tree/components/dialogs/InvitePerson.vue";
import MenuBtn from "@/shared/UI/MenuBtn.vue";
import {useI18n} from 'vue-i18n'
import {isMobileDevice} from "@/shared/helpers/definition";

const {t} = useI18n()

let inviteDialog = ref(false)
const title = ref('название')
const isMobile = isMobileDevice()

const typesOfFamilyTies: {label: string, id: string, text: string}[] = [
  {label: 'Все персоны', id: 'all', text: 'Будут показаны все персоны'},
  {
    label: 'Все кровные персоны с партнерами',
    id: 'withBloodPartners',
    text: 'Видны только родственники, у которых есть общая кровь, со всеми своими партнерами'
  },
  {
    label: 'Все кровные и прямые потомки с партнерами',
    id: 'withBloodAndPartners',
    text: 'Видны только кровные предки со всеми своими партнерами и все кровные потомки со всеми своими партнерами'
  },
]

const profileItems: {id: string, title: string, icon?: string}[] = [
  {id: 'profile', title: t('user.profile')},
  {id: 'exit', title: t('base.exit'), icon: 'logout'},
]
</script>

<template>
  <Panel
    position="top-center"
    style="margin: 0"
  >
    <div
      style="height: 30px"
      class="text-center bg-blue-0 text-blue-6 header-title"
    >
      <q-input
        outlined
        style="height: 30px"
        standout="bg-blue-0 text-light-blue-9"
        input-class="text-center text-light-blue-9"
        class="header-title__input"
        :input-style="{height: '30px'}"
        flat
        :model-value="title"
      />
    </div>
  </Panel>
  <Panel
    class="right-panel"
    position="top-right"
  >

    <div class="header flex">
      <q-card
        flat
        style="height: 40px;"
        class="flex text-center"
      >
        <q-btn
          icon="reorder"
          flat
          color="blue-4"
        >
          <q-tooltip class="text-h6">
            {{ $t('family.listAndCreate') }}
          </q-tooltip>
        </q-btn>
      </q-card>

      <q-card
        flat
        style="height: 40px;"
        class="flex text-center"
      >
        <q-btn-dropdown
          flat
          class="drop-down no-icon"
          color="blue-4"
          :icon="isMobile ? 'mdi-relation-many-to-many' : ''"
          :label="isMobile ? '' : 'Тип родовых связей'"
        >
          <q-list style="max-width: 400px;">
            <q-item
              clickable
              v-close-popup
              v-for="item in typesOfFamilyTies"
              :key="item.id"
            >
              <q-item-section>
                <q-item-label>{{ item.label }}</q-item-label>
                <q-item-label
                  caption
                  lines="2"
                >{{ item.text }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          icon="search"
          flat
          v-if="!isMobile"
          color="blue-4"
        >
          <q-tooltip class="text-h6">
            {{ $t('family.searchPersons') }}
          </q-tooltip>
        </q-btn>
      </q-card>

      <q-card
        flat
        style="height: 40px;"
        v-if="isMobile"
      >
        <q-btn
          icon="search"
          flat

          color="blue-4"
        >
        </q-btn>
      </q-card>

      <q-card
        flat
        style="height: 40px"
        class="flex text-center"
      >
        <q-btn
          flat
          @click="inviteDialog = true"
          color="blue-4"
          :icon="isMobile ? 'person_add_alt' : ''"
          :label="isMobile ? '' : $t('family.invite')"
        ></q-btn>
      </q-card>

      <MenuBtn
        sizeBtn="40px"
        class="q-pa-none"
        icon="account_circle"
        :items="profileItems"
      />
    </div>
  </Panel>
  <InvitePerson
    :invite-dialog="inviteDialog"
    @update:invite-dialog="inviteDialog = $event"
  />
</template>

<style
  scoped
  lang="scss"
>
  .header {
    gap: 15px;
    @media screen and (max-width: 430px) {
      flex-direction: column-reverse;
      width: 50px;
    }
  }

  .header-title {
    width: 100vw;
  }

  :deep(.header-title__input) > .q-field__inner > .q-field__control {
    height: 30px !important;
  }

  :deep(.header-title__input) > .q-field__inner > .q-field__control:before, :deep(.header-title__input) > .q-field__inner > .q-field__control:after {
    border: unset;
  }

  @media screen and (max-width: 1200px) {
    .right-panel {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 430px) {
    .header > div > button {
      padding: 0;
      padding-left: 5px;
    }
    .header > div {
      width: 40px;
    }
    .right-panel {
      margin-right: 0;
    }
    :deep(.no-icon) > .q-btn__content > .q-btn-dropdown__arrow {
      display: none;
    }
  }
</style>