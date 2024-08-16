<script
  setup
  lang="ts"
>

import type { Kinship as KinshipType} from "@/pages/tree/utils/types";

const emit = defineEmits(['create', 'update:addModal'])
const props = defineProps(['addModal', 'data'])

const kinships: KinshipType[] = [
  {
    role: 'parent',
    title: 'father',
  },
  {
    role: 'parent',
    title: 'mother'
  },
  {
    role: 'child',
    title: 'daughter'
  },
  {
    role: 'child',
    title: 'son'
  }
]

function toggleAdd () {
  emit('update:addModal', !props.addModal)
}

function createKinship (kinship: {
  role: string,
  title: string,
}): void {
  emit('create', kinship)
}

</script>

<template>
  <q-dialog
    class="dialog-kinship"
    :model-value="addModal"
    @update:model-value="emit('update:addModal', !addModal)"
  >
    <q-card style="max-width: 1000px">
      <q-card-section>
        <div class="text-h6">{{ $t('family.addKinship') }}</div>
      </q-card-section>

      <q-card-section style="max-width: 1000px">
        <div class="family-tree">
          <q-card
            flat
            class="person center"
          >
            <q-avatar
              class="center__avatar q-mt-xs"
              color="grey"
              icon="mdi-camera"
            ></q-avatar>
            <p class="q-ma-none text-body1 q-pt-lg person__title">Иван Иваныч Иванов</p>
          </q-card>
          <q-btn
            @click="createKinship(person)"
            v-for="person in kinships"
            :key="person.title"
            flat
            class="person"
            :class="person.role + ' ' + person.title"
          > {{ $t(`family.${person.title}`) }}
          </q-btn>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="OK"
          @click="toggleAdd"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style
  scoped
  lang="scss"
>
  $person-color: #b6b6fa;

  @mixin boys {
    border-color: #6699ff;
    color: #6699ff;
  }

  @mixin girls {
    border-color: #ff6666;
    color: #ff6666;
  }

  @media screen and (min-width: 767px) {
    .person {
      position: absolute;
      display: flex;
      justify-content: center;
      max-width: 270px;
    }

    .btns {
      position: relative;
    }
    .family-tree {
      position: relative;
      width: 700px;
      height: 300px;
      margin: 50px auto;

      .person {
        position: absolute;
        padding: 10px 20px;
        border-radius: 10px;
        text-align: center;
        border: 2px solid $person-color;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &.center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          position: relative;
          height: 110px;
          width: 170px;

          .center__avatar {
            position: absolute;
            top: -30px;
            height: 60px;
            width: 60px;
            border-radius: 20%;
          }
        }

        &.parent {
          &.father {
            top: 10px;
            left: 10%;
            @include boys;
          }

          &.mother {
            top: 10px;
            right: 50px;
            @include girls;
          }
        }

        &.child {
          &.son {
            bottom: 10px;
            left: 10%;
            @include boys;
          }

          &.daughter {
            bottom: 10px;
            right: 50px;
            @include girls;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .family-tree {
      min-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .person {
      border: 1px solid $person-color;

      .person__title {
        padding-top: 0;
      }

      &.center {
        text-align: center;

        .center__avatar {
          border-radius: 5% !important;
        }
      }

      &.parent {
        &.father {
          @include boys;
        }

        &.mother {
          @include girls;
        }
      }

      &.child {
        &.son {
          @include boys;
        }

        &.daughter {
          @include girls;
        }
      }
    }
  }

</style>