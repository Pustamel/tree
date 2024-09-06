<script
  setup
  lang="ts"
>
import {ref} from 'vue'
import {useSystemMessagesStore} from "@/stores/systemMessagesStore";

const emit = defineEmits(['update:edit'])
const props = defineProps(['edit'])
const messageStore = useSystemMessagesStore()

const fileInputPhoto = ref(null)
const lastName = ref('')
const name = ref('')
const username = ref('')
const surnameAtBirth = ref('')
const sex = ref('')
const dead = ref('')

function triggerLoad():void {
  if(fileInputPhoto.value) {
    // @ts-ignore
    fileInputPhoto.value.pickFiles();
  }
}

function onLoadPhoto():void {}

function handleSave() {
  messageStore.addMessage({title: 'saved!', typeMessage: 'positive'})
}

</script>

<template>
  <q-dialog
    @update:model-value="emit('update:edit', !edit)"
    :model-value="edit"
  >
    <q-card
      flat
      style="max-width: 1500px"
      class="q-pb-lg q-pl-md q-pr-md q-pt-xs"
    >
      <div class="q-pa-md row items-center justify-between">
        <div class="row items-center">
          <q-avatar
            size="40px"
            style="border: 1px solid #3e9eed; color: #3e9eed"
          >Ж
          </q-avatar>
          <q-toolbar-title>Мама</q-toolbar-title>
        </div>
        <q-btn
          size="20"
          flat
          @click="emit('update:edit', false)"
          icon="close"
        />
      </div>
      <div
        class="flex gap-2 edit-body"
        style="padding: 10px 15px"
      >

        <div @click="triggerLoad" class="edit-body__image flex flex-center">
          <!--          NOTE если есть аватарка-->
          <!--                      <q-img style="height: 300px;" src="https://cdn.quasar.dev/img/parallax2.jpg">-->
          <!--                      </q-img>-->
          <q-icon
            name="photo_camera"
            size="50px"
            color="green-4"
          />
        </div>
        <q-uploader ref="fileInputPhoto"  @uploaded="onLoadPhoto" class="hidden"/>

        <div class="edit-body__forms q-pa-md">
          <div class="edit-body__forms_base">
            <q-input
              outlined
              :label="$t('user.lastName')"
              class="q-mb-md w-300px"
              :model-value="lastName"
            />
            <q-input
              outlined
              :label="$t('user.name')"
              class="q-mb-md"
              :model-value="name"
            />
            <q-input
              outlined
              :label="$t('user.surname')"
              class="q-mb-md"
              :model-value="username"
            />
            <q-input
              outlined
              :label="$t('family.surnameAtBirth')"
              class="q-mb-md"
              :model-value="surnameAtBirth"
            />
            <q-input
              outlined
              :label="$t('family.sex')"
              class="q-mb-md"
              :model-value="sex"
            />
            <q-input
              outlined
              :label="$t('family.alive') + ' / ' + $t('family.dead')"
              class="q-mb-md"
              :model-value="dead"
            />
          </div>

          <div class="panels">
            <q-expansion-item
              style="max-width: 1000px"
              expand-separator
              hide-expand-icon
              icon="add"
              :label="$t('family.born')"
            >
              <q-card>
                <q-card-section class="panels-born__section">
                  <div class="flex panels-born__section_inputs">
                    <q-input
                      outlined
                      :label="$t('base.day')"
                      class="q-mb-md"
                     model-value=""/>
                    <q-input
                      outlined
                      :label="$t('base.month')"
                      class="q-mb-md"
                     model-value=""/>
                    <q-input
                      outlined
                      :label="$t('base.year')"
                      class="q-mb-md"
                     model-value=""/>
                  </div>
                  <q-input
                    outlined
                    :label="$t('family.placeOfBorn')"
                    class="q-mb-md"
                   model-value=""/>
                </q-card-section>

              </q-card>
            </q-expansion-item>

            <q-expansion-item
              style="max-width: 1000px"
              expand-separator
              hide-expand-icon
              icon="add"
              :label="$t('base.note')"
            >
              <q-card>
                <q-card-section>
                  <q-input
                    outlined
                    :label="$t('base.note')"
                    class="q-mb-md"
                   model-value=""/>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </div>
      </div>
      <q-card-actions align="right">
        <q-btn
          flat
          :label="$t('base.moreParameters')"
          color="primary"
          icon="open_in_full"
          class="q-mr-lg"
        />
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
          @click="handleSave"
        />
      </q-card-actions>
    </q-card>

  </q-dialog>
</template>

<style
  scoped
  lang="scss"
>
  .edit-body__image {
    width: 200px;
    height: 300px;
    border-radius: 3%;
    background-color: #e9ffee;
    @media screen and (max-width: 500px) {
      width: 100vw;
    }

    &:has(:not(img)) {
      border: 1px dashed #89dc75;
    }
  }

  .edit-body__forms_base {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .edit-body__forms {
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .panels-born__section_inputs, .edit-body__forms_base {
    gap: 0 10px;
  }
</style>