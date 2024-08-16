<script setup lang="ts">
import { Handle, Position, useVueFlow } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import NodeItem from '@/pages/tree/components/NodeItem.vue'
import { ref } from 'vue'
import Kinship from '@/pages/tree/components/dialogs/Kinship.vue'
import Edit from '@/pages/tree/components/dialogs/EditPerson.vue'
import type { Kinship as KinshipType} from '@/pages/tree/utils/types'

const props = defineProps(['id', 'data'])
const addModal = ref(false)
const editModal = ref(false)
const emit = defineEmits(['create'])

const { updateNodeData } = useVueFlow()

function toggleAdd ():void {
  addModal.value = !addModal.value
}

function toggleEdit ():void {
  editModal.value = !editModal.value
}

function createKinship (member: KinshipType):void {
  emit('create', { ...props, ...member })
}

</script>

<template>
  <NodeToolbar
    class="toolbar"
    :offset="1"
    :is-visible="data.toolbarVisible"
    :position="data.toolbarPosition"
  >
    <div>
      <q-btn
        @click="toggleAdd"
        size="10"
        round
        flat
        icon="add"
      />
      <q-btn
        @click="toggleEdit"
        size="10"
        round
        flat
        icon="edit"
      />
    </div>
    <Kinship
      v-model:addModal="addModal"
      @create="createKinship"
      :data="data"
    />
    <Edit v-model:edit="editModal" />
  </NodeToolbar>

  <NodeItem
    :data="data"
    :id="id"
  />
</template>

<style>
  .vue-flow__node-toolbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: #ffffff;
    padding: 8px;
    border-radius: 8px;
  }
  .vue-flow__node-menu {
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .vue-flow__node-menu.selected {
    box-shadow: 0 0 0 2px #2563eb;
  }
  .vue-flow__node-menu {
    padding: 0 !important;
  }
</style>

<style scoped>
  .dialog-kinship {
    width: 400px !important;
  }
</style>