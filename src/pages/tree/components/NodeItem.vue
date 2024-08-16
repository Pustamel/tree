<script setup lang="ts">
import Candle from '@/pages/tree/assets/Candle.vue'
import { ref } from 'vue'
import EditRelation from '@/pages/tree/components/dialogs/EditRelation.vue'
import type {itemMenuBtn} from "@/shared/UI/typesUI";
import MenuBtn from '@/shared/UI/MenuBtn.vue'
import { useI18n } from 'vue-i18n'

const { t: localization } = useI18n()

const props = defineProps(['id', 'data'])

let editRelation = ref(false)

const actionsPerson:itemMenuBtn[] = [
  { id: 1, title: localization('base.delete'), icon: 'delete' },
  { id: 2, title: localization('family.editRelation'), icon: 'mdi-family-tree', colorIcon: 'blue-4' },
  { id: 3, title: localization('family.makeMain'), icon: 'mdi-crown', colorIcon: 'orange' }
]

function handleSelect (item: itemMenuBtn):void {
  if (item.id === 2) {
    editRelation.value = true
  }
}

</script>

<template>
  <div class="node-item">
    <MenuBtn
      class="text-end q-pa-none"
      @select="handleSelect"
      :items="actionsPerson"
    />
    <div class="node-item__avatar">

      <!--      NOTE: С фото + умер-->
      <!--      <q-img-->
      <!--        height="45px"-->
      <!--        width="45px"-->
      <!--        src="https://cdn.quasar.dev/img/parallax2.jpg"-->
      <!--        alt="photo-profile"-->
      <!--        class="node-item__avatar-img"-->
      <!--        style="border-radius: 3px; background-color: #c15656"-->
      <!--      >-->
      <!--        <div class="absolute-bottom-right node-item__avatar__candle flex flex-center">-->
      <!--          <Candle-->
      <!--            fillColor="white"-->
      <!--            color="white"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </q-img>-->

      <div class="node-item__avatar__no-photo text-center bg-blue-2">
        <q-icon
          color="white"
          size="40px"
          name="perm_identity"
        />
        <!--              NOTE: без фото, умер-->
        <!--                      <div class="absolute-bottom-right node-item__avatar__candle flex flex-center">-->
        <!--                        <Candle-->
        <!--                          fillColor="white"-->
        <!--                          color="white"-->
        <!--                        />-->
        <!--                      </div>-->
      </div>
    </div>
    <div class="text-center node-item__body text-center q-mt-lg">
      <div class="node-item__body__age rounded-50%">
        48 лет
      </div>
      <div class="node-item__body__text">
        <p> {{ data.label }} </p>
        <p>15 июнь(я) 1976</p>
      </div>
    </div>
  </div>

  <EditRelation
    :edit-relation="editRelation"
    @update:editRelation="editRelation = $event"
  />
</template>

<style
  scoped
  lang="scss"
>
  $death-color: #c15656;
  p {
    margin: 0;
  }

  .node-item {
    position: relative;
    box-sizing: border-box;
    height: 150px;
    width: 170px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
  }

  .node-item__avatar {
    position: absolute;
    top: -20px;
    right: 35%;
  }

  .node-item__avatar__no-photo {
    height: 45px;
    border-radius: 3px;
    border: 2px solid #45a0e8;
  }

  .node-item__body__text {
    height: 85px;
    overflow: hidden;
  }

  .node-item__body__age {
    border: 1px solid #45a0e8;
    display: inline;
    border-radius: 5px;
    padding: 3px;
  }

  .node-item__avatar__candle {
    background-color: $death-color;
    padding: 0px;
    height: 13px;
    width: 13px;
    border-radius: 5px 0 0 0;
  }

  .node-item__avatar {
    border-radius: 5px;
  }

  .node-item__avatar-img {
    border: 2px solid $death-color;
    border-radius: 5px;
    background-color: $death-color;
  }
</style>